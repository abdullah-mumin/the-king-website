import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./dance.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>

            {/* All services area */}
            <p className="mt-3 ms-5 fw-bolder text-start" style={{ fontSize: '4rem' }}>Learn A Variety of Dance Styles</p>
            <div className="course-service mb-5 mt-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services; <h2>Servises</h2>