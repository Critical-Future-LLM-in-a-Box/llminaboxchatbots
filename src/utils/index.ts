import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import localforage from "localforage";

export function cn(...inputs: (string | undefined | null | false)[]): string {
  return twMerge(clsx(inputs));
}

export const isDefined = <T>(
  value: T | undefined | null
): value is NonNullable<T> => value !== undefined && value !== null;

export const isNotDefined = <T>(
  value: T | undefined | null
): value is undefined | null => value === undefined || value === null;

export const isEmpty = (value: string | undefined | null): value is undefined =>
  value === undefined || value === null || value === "";

export const isNotEmpty = (value: string | undefined | null): value is string =>
  value !== undefined && value !== null && value !== "";

export const sendRequest = async <ResponseData>(
  params:
    | {
        url: string;
        method: string;
        body?: Record<string, unknown> | FormData;
        type?: string;
        headers?: Record<string, any>;
        formData?: FormData;
        onRequest?: (request: RequestInit) => Promise<void>;
      }
    | string
): Promise<{ data?: ResponseData; error?: Error }> => {
  try {
    const url = typeof params === "string" ? params : params.url;
    const headers =
      typeof params !== "string" && isDefined(params.body)
        ? {
            "Content-Type": "application/json",
            ...params.headers
          }
        : undefined;
    let body: string | FormData | undefined =
      typeof params !== "string" && isDefined(params.body)
        ? JSON.stringify(params.body)
        : undefined;
    if (typeof params !== "string" && params.formData) body = params.formData;

    const requestInfo: RequestInit = {
      method: typeof params === "string" ? "GET" : params.method,
      mode: "cors",
      headers,
      body
    };

    if (typeof params !== "string" && params.onRequest) {
      await params.onRequest(requestInfo);
    }

    const response = await fetch(url, requestInfo);

    let data: any;
    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else if (typeof params !== "string" && params.type === "blob") {
      data = await response.blob();
    } else {
      data = await response.text();
    }
    if (!response.ok) {
      let errorMessage;

      if (typeof data === "object" && "error" in data) {
        errorMessage = data.error;
      } else {
        errorMessage = data || response.statusText;
      }

      throw errorMessage;
    }

    return { data };
  } catch (e) {
    console.error(e);
    return { error: e as Error };
  }
};

export const getLocalStorageChat = async (chatflowid: string) => {
  const localChat = await localforage.getItem(`chat:${chatflowid}`);
  return localChat ?? "";
};

export const setLocalStorageChat = async (
  chatflowid: string,
  chatId: string,
  ObjToSave: string
) => {
  const localChat = await localforage.getItem(`chat:${chatflowid}`);

  if (!localChat) {
    await localforage.setItem(`chat:${chatflowid}`, ObjToSave);
  } else {
    await localforage.setItem(
      `chat:${chatId}/flow:${chatflowid}`,
      localChat + ObjToSave
    );
  }
};

export const removeLocalStorageChatHistory = (chatflowid: string) => {};

// import { FileUpload, IAction } from "@/components/Bot";
// import { sendRequest } from "@/utils/index";

// export type IncomingInput = {
//   question: string;
//   uploads?: FileUpload[];
//   overrideConfig?: Record<string, unknown>;
//   socketIOClientId?: string;
//   chatId?: string;
//   fileName?: string; // Only for assistant
//   leadEmail?: string;
//   action?: IAction;
// };

// type BaseRequest = {
//   apiHost?: string;
//   onRequest?: (request: RequestInit) => Promise<void>;
// };

// export type MessageRequest = BaseRequest & {
//   chatflowid?: string;
//   body?: IncomingInput;
// };

// export type FeedbackRatingType = "THUMBS_UP" | "THUMBS_DOWN";

// export type FeedbackInput = {
//   chatId: string;
//   messageId: string;
//   rating: FeedbackRatingType;
//   content?: string;
// };

// export type CreateFeedbackRequest = BaseRequest & {
//   chatflowid?: string;
//   body?: FeedbackInput;
// };

// export type UpdateFeedbackRequest = BaseRequest & {
//   id: string;
//   body?: Partial<FeedbackInput>;
// };

// export type UpsertRequest = BaseRequest & {
//   chatflowid: string;
//   apiHost?: string;
//   formData: FormData;
// };

// export type LeadCaptureInput = {
//   chatflowid: string;
//   chatId: string;
//   name?: string;
//   email?: string;
//   phone?: string;
// };

// export type LeadCaptureRequest = BaseRequest & {
//   body: Partial<LeadCaptureInput>;
// };

// export const sendFeedbackQuery = ({
//   chatflowid,
//   apiHost = "http://localhost:3000",
//   body,
//   onRequest
// }: CreateFeedbackRequest) =>
//   sendRequest({
//     method: "POST",
//     url: `${apiHost}/api/v1/feedback/${chatflowid}`,
//     body,
//     onRequest: onRequest
//   });

// export const updateFeedbackQuery = ({
//   id,
//   apiHost = "http://localhost:3000",
//   body,
//   onRequest
// }: UpdateFeedbackRequest) =>
//   sendRequest({
//     method: "PUT",
//     url: `${apiHost}/api/v1/feedback/${id}`,
//     body,
//     onRequest: onRequest
//   });

// export const sendMessageQuery = ({
//   chatflowid,
//   apiHost = "http://localhost:3000",
//   body,
//   onRequest
// }: MessageRequest) =>
//   sendRequest<any>({
//     method: "POST",
//     url: `${apiHost}/api/v1/prediction/${chatflowid}`,
//     body,
//     onRequest: onRequest
//   });

// export const upsertVectorStoreWithFormData = ({
//   chatflowid,
//   apiHost = "http://localhost:3000",
//   formData,
//   onRequest
// }: UpsertRequest) =>
//   sendRequest({
//     method: "POST",
//     url: `${apiHost}/api/v1/vector/upsert/${chatflowid}`,
//     formData,
//     headers: {
//       "Content-Type": "multipart/form-data"
//     },
//     onRequest: onRequest
//   });

// export const getChatbotConfig = ({
//   chatflowid,
//   apiHost = "http://localhost:3000",
//   onRequest
// }: MessageRequest) =>
//   sendRequest<any>({
//     method: "GET",
//     url: `${apiHost}/api/v1/public-chatbotConfig/${chatflowid}`,
//     onRequest: onRequest
//   });

// export const isStreamAvailableQuery = ({
//   chatflowid,
//   apiHost = "http://localhost:3000",
//   onRequest
// }: MessageRequest) =>
//   sendRequest<any>({
//     method: "GET",
//     url: `${apiHost}/api/v1/chatflows-streaming/${chatflowid}`,
//     onRequest: onRequest
//   });

// export const sendFileDownloadQuery = ({
//   apiHost = "http://localhost:3000",
//   body,
//   onRequest
// }: MessageRequest) =>
//   sendRequest<any>({
//     method: "POST",
//     url: `${apiHost}/api/v1/openai-assistants-file`,
//     body,
//     type: "blob",
//     onRequest: onRequest
//   });

// export const addLeadQuery = ({
//   apiHost = "http://localhost:3000",
//   body,
//   onRequest
// }: LeadCaptureRequest) =>
//   sendRequest<any>({
//     method: "POST",
//     url: `${apiHost}/api/v1/leads/`,
//     body,
//     onRequest: onRequest
//   });
