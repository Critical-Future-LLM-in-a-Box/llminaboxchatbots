import { Message, ChatData } from "@/context";
import { request } from "@/utils/request";

export async function getPrediction(
  userQuestion: string,
  chatData: ChatData,
  uploads?: Message["uploads"]
): Promise<{ text: string }> {
  return await request<{ text: string }>({
    url: `${chatData.config?.apiHost}/api/v1/prediction/${chatData.config?.chatflowid}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        question: userQuestion,
        history: chatData.config?.chatMemory ? chatData.messages : [],
        uploads: uploads
      })
    }
  });
}

// export async function canStreamPrediction(chatData: ChatData) {
//   const response = await request<any>({
//     url: `${chatData.config?.apiHost}/api/v1/chatflows-streaming/${chatData.config?.chatflowid}`
//   });

//   return response.isStreaming || false;
// }

// export async function* getStreamPredictionText(
//   userQuestion: string,
//   chatData: ChatData
// ) {
//   const response = await fetch(
//     `${chatData.config?.apiHost}/api/v1/prediction/${chatData.config?.chatflowid}`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         question: userQuestion,
//         history: chatData.config?.chatMemory ? chatData.messages : []
//       })
//     }
//   );

//   if (!response || !response.ok || !response.body) {
//     throw new Error("Failed to fetch prediction");
//   }

//   const decoder = new TextDecoder();
//   const reader = response.body.getReader();
//   let streamText = "";

//   let result = await reader.read();
//   while (!result.done) {
//     streamText += decoder.decode(result.value, { stream: true });

//     if (streamText.startsWith('{"text":"')) {
//       streamText = streamText.replace('{"text":"', "");
//     }

//     const responseParts = streamText.split('","');

//     if (responseParts.length > 1) {
//       streamText = responseParts[0];

//       const streamLines = streamText.split("\\n");

//       for (let line of streamLines) {
//         if (line === "") continue;

//         yield line.trim();
//       }

//       break;
//     }

//     result = await reader.read();
//   }
// }

export async function sendMessage(
  userMessage: string,
  chatData: ChatData,
  dispatch: Function,
  uploads?: Message["uploads"]
) {
  const newUserMessage: Message = {
    role: "userMessage",
    content: userMessage,
    timestamp: new Date().toLocaleString(),
    uploads: uploads
  };

  let newApiMessage: Message = {
    role: "apiMessage",
    content: "",
    timestamp: new Date().toLocaleString()
  };

  dispatch({
    type: "ADD_MESSAGE",
    payload: newUserMessage
  });

  dispatch({
    type: "ADD_MESSAGE",
    payload: newApiMessage
  });

  dispatch({
    type: "SET_API_TYPING",
    payload: true
  });

  const prediction = (await getPrediction(
    userMessage,
    chatData,
    uploads as Message["uploads"]
  ).catch((err) => {
    dispatch({
      type: "SET_ERROR",
      payload: err.message
    });
    dispatch({
      type: "DELETE_MESSAGE",
      payload: true
    });
  })) as { text: string } | void;

  if (prediction) {
    dispatch({
      type: "UPDATE_MESSAGE",
      payload: { ...newApiMessage, content: prediction.text }
    });
  }

  dispatch({
    type: "SET_API_TYPING",
    payload: false
  });
}
