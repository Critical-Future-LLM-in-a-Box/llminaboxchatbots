import { ChatData, Message } from "@/types";

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
    bodyBackgroundColor?: string;
  };

  onFirstUserMessage?: (userMessage?: Message, chatData?: ChatData) => void;
  onFirstAPIMessage?: (apiMessage?: Message, chatData?: ChatData) => void;

  onUserMessage?: (userMessage?: Message, chatData?: ChatData) => void;
  onAPIMessage?: (apiMessage?: Message, chatData?: ChatData) => void;

  onResetChat?: (chatData?: ChatData) => void;
  onErrorMessage?: (chatData?: ChatData) => void;

  onMount?: (config?: Config) => void;
  onUnmount?: (config?: Config) => void;
}
