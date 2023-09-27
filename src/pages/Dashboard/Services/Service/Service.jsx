import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { services } from "../../../../core/constants/dummyData";
import Title from "../../../../components/Title/Title";
import { translate } from "../../../../core/helpers/Translator";
import "./Service.scss";

const Service = () => {
    const {id: serviceID} = useParams();
    const [service, setServices] = useState(null);

    const getService = (serviceID) => {
        // Must be implemented using axios and get data from server.
        const fetchedData = services.filter(service => service.id === +serviceID)[0];

        return {...fetchedData};
    }

    useEffect(() => {
        setServices(getService(serviceID));
    }, []);

    if (!service) {
        return <>
            <p>در حال بارگذاری اطلاعات...</p>
        </>;
    }

    return (
        <>
             <h6 className="font-weight--bold">
                 {`${translate(service.title)} ${service.id} - ${translate(service.description)}`}
             </h6>
            {
                service?.subServices?.length > 0 ? service?.subServices?.map(subService => <Title key={subService.id} id={subService.id} addIdToTitle text={subService.title} link={`/service/${serviceID}/sub-services/${subService.id}`} customClasses="my-1 capitalize-title" />) : <p>موردی جهت نمایش یافت نشد</p>
            }
        </>
    );
}

export default Service;
