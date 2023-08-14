import servicesData from "../constants/servicesData";

export default class ServicesHelper
{
    getServiceData = (serviceIdentifier = "") => {
        const servicesIdentifiers = [...serviceIdentifier.split(",")];

        let currentItem = {...servicesData[servicesIdentifiers[0]]};
        for (let i = 1; i < servicesIdentifiers.length; i++) {
            currentItem = {...currentItem[servicesIdentifiers[i]]};
        }

        return {...currentItem, url: servicesIdentifiers.join("/")};
    }
}
