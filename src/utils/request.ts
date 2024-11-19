export async function request<T>({
  url,
  options,
  retries = 2,
  delay = 2000,
  timeout = 8000
}: {
  url: string;
  options?: RequestInit;
  retries?: number;
  delay?: number;
  timeout?: number;
}): Promise<T> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  const response: Response = await fetch(url, {
    ...options,
    signal: controller.signal
  }).catch((error: Error) => errorHandler(error));

  if (!response.ok) errorHandler(new Error(response.statusText));

  clearTimeout(timeoutId);

  const contentType = response.headers.get("content-type")!;

  const supportedTypes = ["json", "image", "audio", "video", "octet-stream"];

  for (const type of supportedTypes) {
    if (contentType.includes(type)) {
      if (type === "json") return response.json() as T;
      return response.blob() as T;
    }
  }

  return response.text() as T;

  async function errorHandler(error: Error): Promise<Response> {
    clearTimeout(timeoutId);
    if (retries === 0) throw error;
    return new Promise((resolve) => setTimeout(resolve, delay)).then(() =>
      request({ url, options, retries: retries - 1, delay, timeout })
    );
  }
}
