import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { price, name, img, details } = props.service;
    return (
        <div className="text-center ms-5 border-danger">

            {/* Service area */}
            <Col>
                <Card className="p-4 mb-4" style={{ width: '25rem', height: '32rem' }}>
                    <Card.Img className="center" style={{ height: '210px', borderRadius: '10px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="fw-bold fs-3">{name}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <p className="fw-bold mt-4">Course Price: $<span>{price}</span> </p>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;