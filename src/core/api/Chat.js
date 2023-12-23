import Main from "./Main";

class ChatApi
{
    static #apiBridge = new Main();

    static sendMessage = async (subject = "", houseId = "", code = "", text = "", nationalCode = "") => {
        let data = {
            subject,
            house_id: houseId,
            code,
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
