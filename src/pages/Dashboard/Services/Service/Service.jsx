import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { services } from "../../../../core/constants/dummyData";
import Title from "../../../../components/Title/Title";
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
                 {`${service.title} ${service.id} - ${service.description}`}
             </h6>
            {
                service?.subServices?.length > 0 ? service?.subServices?.map(subService => <Title key={subService.id} text={`${subService.id}. ${subService.title}`} link={`/service/${serviceID}/sub-services/${subService.id}`} customClasses="margin-y12px" />) : <p>موردی جهت نمایش یافت نشد</p>
            }
        </>
    );
}

export default Service;
