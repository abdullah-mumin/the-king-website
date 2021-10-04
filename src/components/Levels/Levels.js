import React from 'react';
import { Card } from 'react-bootstrap';

const Levels = () => {
    return (
        <div className="bg-info bg-opacity-10" style={{ height: '30rem' }}>
            <p className="mt-2 ms-4 fw-bolder text-start" style={{ fontSize: '5rem' }}>Step-by-Step Learning For All Levels</p>
            <p className="text-start ms-4 fs-4">Whether you’re just starting out or you’ve got some training under your belt – we got you covered.</p>
            <div className="row justify-content-between m-4 gap-3 ">
                <Card style={{ width: '22rem', height: '15rem' }} className="bg-success bg-opacity-50">
                    <Card.Body>
                        <Card.Title className="fw-bolder fs-2 ">BRAND NEW</Card.Title>
                        <Card.Text className="fw-bold fs-4">
                            Got two left feet? Start with our 10-day intro program.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem', height: '15rem' }} className="bg-success bg-opacity-50">
                    <Card.Body>
                        <Card.Title className="fw-bolder fs-2 ">BEGINNER</Card.Title>
                        <Card.Text className="fw-bold fs-4">
                            Got the basics down? Level up with new moves and routines.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem', height: '15rem' }} className="bg-success bg-opacity-50">
                    <Card.Body>
                        <Card.Title className="fw-bolder fs-2 ">INTERMEDIATE</Card.Title>
                        <Card.Text className="fw-bold fs-4">
                            Feel pretty confident? Learn more challenging skills and pieces.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem', height: '15rem' }} className="bg-success bg-opacity-50">
                    <Card.Body>
                        <Card.Title className="fw-bolder fs-2 ">ADVANCED</Card.Title>
                        <Card.Text className="fw-bold fs-4">
                            Already killin’ it? Train with the top choreographers in the game.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Levels;