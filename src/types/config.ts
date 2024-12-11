import { Message } from "@/types";

export interface Config {
  apiHost?: string;
  chatflowId?: string;
  authToken?: string;

  assistant?: {
    name?: string;
    description?: string;
    welcomeMessage?: string;
    voice?: { name?: string; apiHost?: string; apiKey?: string };
    avatar?: {
      staticUrl?: string;
      liveUrl?: string;
      videoUrl?: string;
    };
  };

  ui?: {
    sidebar?: boolean;
    foregroundColor?: string;
    backgroundColor?: string;
    width?: string;
    height?: string;
  };

  onRequest?: (request?: Message) => void;
  onResponse?: (response?: Message) => void;
}
