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
}
