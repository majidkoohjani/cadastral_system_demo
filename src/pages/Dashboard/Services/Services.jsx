import { services } from "../../../core/constants/dummyData";
import Title from "../../../components/Title/Title";

const Services = () => {
    return (
        <>
            {
                services.map(service => <Title key={service.id} id={service.id} title={service.title} text={service.description} link={`/service/${service.id}/sub-services`} addIdToTitle customClasses="my-1 font-weight--bold capitalize-title" />)
            }
        </>
    );
}

export default Services;
