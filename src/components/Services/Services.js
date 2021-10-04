import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./dance.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <h2>Servises:{services.length}</h2>
            <div>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>


            {/* <Row xs={1} md={3} className="g-4">
                {[...Array(services.length)].map((e, i) => {
                    return (
                        <div>
                            {
                                services.map(service => <Service
                                    key={service.id}
                                    service={service}></Service>)
                            }
                        </div>
                        // <Col>
                        //     <Card>
                        //         <div>
                        //             {
                        //                 services.map(service => <Service
                        //                     key={service.id}
                        //                     service={service}></Service>)
                        //             }
                        //         </div>
                        //     </Card>
                        // </Col>

                    )
                })
                }
            </Row> */}

        </div>
    );
};

export default Services; <h2>Servises</h2>