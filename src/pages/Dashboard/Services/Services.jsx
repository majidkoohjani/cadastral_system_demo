import { services } from "../../../core/constants/dummyData";
import Title from "../../../components/Title/Title";

const Services = () => {
    return (
        <>
            {
                services.map(service => <Title key={service.id} title={`${service.title} ${service.id} - `} text={service.description} link={`/service/${service.id}/sub-services`} customClasses="margin-y12px font-weight--bold" />)
            }
        </>
    );
}

export default Services;
