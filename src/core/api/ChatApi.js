import Main from "./Main"

export default class ChatApi
{
    constructor() {
        this.apiBridge = new Main();
    }

    getChatsList = async () => {
        return await this.apiBridge.getRequest(`chat/history`);
    }

    getChatMessages = async (chatId = "") => {
        return await this.apiBridge.getRequest(`chat/history/${chatId}`);
    }

    sendMessage = async (chatId = null, message = "") => {
        if (!chatId || message.length < 1) {
            return Promise.reject("Message or chat_id is empty");
        }

        return await this.apiBridge.postRequest(`chat/history/${chatId}`, {
            message_text: message,
        });
    }
}
