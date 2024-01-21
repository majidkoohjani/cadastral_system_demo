import Main from "./Main";

class ChatApi
{
    static #apiBridge = new Main();

    static sendMessage = async (subject = "", text = "", nationalCode = "") => {
        let data = {
            subject,
            text,
        };

        if (nationalCode.length > 0) {
            data["national_code"] = nationalCode;
        }

        return this.#apiBridge.postRequest(`chat/new_chat`, {
            ...data
        });
    }
}

export default ChatApi;
