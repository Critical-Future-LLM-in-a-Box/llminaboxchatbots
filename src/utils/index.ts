// @ts-nocheck

import { marked } from "marked";
import DOMPurify from "dompurify";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | false)[]): string {
  return twMerge(clsx(inputs));
}

export async function* predictionStream(
  {
    host = "https://llm.criticalfutureglobal.com",
    id = "95e01dd4-ff2f-4055-a6f1-3cfc35261831",
    question = "hello"
  } = {
    host: "https://llm.criticalfutureglobal.com",
    id: "95e01dd4-ff2f-4055-a6f1-3cfc35261831",
    question: "hello"
  }
) {
  const response = await fetch(`${host}/api/v1/prediction/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question
    })
  }).catch((error) => {
    console.error("An error occurred while fetching prediction:", error);
  });

  if (!response.ok) {
    throw new Error("Failed to fetch prediction");
  }

  const decoder = new TextDecoder();
  const reader = response.body.getReader();

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    const result = decoder.decode(value, { stream: true });

    yield result;
  }
}

export async function* predictionStreamText({ host, id, question } = {}) {
  let text = "";

  const stream = await predictionStream({ host, id, question });

  for await (const chunk of stream) {
    text += chunk;
    const responseParts = chunk.split('","');
    if (responseParts.length > 1) {
      text = responseParts[0];
      break;
    }
  }

  const responseText = text.split("\\n");

  for (let line of responseText) {
    if (line === "") return;

    if (line.startsWith('{"text":"')) {
      line = line.replace('{"text":"', "");
    }

    yield line;
  }
}
