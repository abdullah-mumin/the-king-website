import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { price, name, img, details } = props.service;
    console.log(props.length);
    return (
        <div>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <h6>Course Price: $<span>{price}</span> </h6>
                        <Card.Text>
                            {details}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;