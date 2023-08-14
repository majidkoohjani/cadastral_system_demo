import ServicesHelper from "../helpers/ServicesHelper";
import Main from "./Main";

export default class Services
{
    static #apiBridge = new Main();
    static #servicesHelper = new ServicesHelper();

    static getData = async (serviceIdentifierString = "") => {
        const { method, url } = this.#servicesHelper.getServiceData(serviceIdentifierString);

        return this.#apiBridge[`${method.toLowerCase()}Request`](`services/${url}`);
    }
}
