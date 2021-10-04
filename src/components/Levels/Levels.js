import React from 'react';
import { Card } from 'react-bootstrap';

const Levels = () => {
    return (
        <div className="mt-5 mb-5">

            {/* Level section */}
            <p className="mt-2 ms-4 fw-bolder text-start" style={{ fontSize: '4rem' }}>Step-by-Step Learning For All Levels</p>
            <p className="text-start ms-4 fs-4">Whether you’re just starting out or you’ve got some training under your belt – we got you covered.</p>
            <div className="row justify-content-between m-4 gap-3 ">
                <Card style={{ width: '22rem', height: '32rem' }} className="bg-success bg-opacity-25">
                    <Card.Body>
                        <Card.Img className="center" style={{ height: '210px', borderRadius: '10px' }} variant="top" src="https://www.enfacestudios.com/wp-content/uploads/2020/07/Recreational.jpg" />
                        <Card.Title className="fw-bolder fs-2 mt-5 mb-4 bg-primary bg-opacity-50 rounded">BRAND NEW</Card.Title>
                        <Card.Text className="fw-bold fs-4">
                            Got two left feet? Start with our 10-day intro program.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem', height: '32rem' }} className="bg-success bg-opacity-25">
                    <Card.Body>
                        <Card.Img className="center" style={{ height: '210px', borderRadius: '10px' }} variant="top" src="https://s35247.pcdn.co/wp-content/uploads/2018/07/IMG_0040-min-1600x900.jpg.webp" />
                        <Card.Title className="fw-bolder fs-2 mt-5 mb-4 bg-primary bg-opacity-50 rounded">BEGINNER</Card.Title>
                        <Card.Text className="fw-bold fs-4">
                            Got the basics down? Level up with new moves and routines.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem', height: '32rem' }} className="bg-success bg-opacity-25">
                    <Card.Body>
                        <Card.Img className="center" style={{ height: '210px', borderRadius: '10px' }} variant="top" src="https://www.enfacestudios.com/wp-content/uploads/2020/08/grand-allegros-colored.jpg" />
                        <Card.Title className="fw-bolder fs-2 mt-5 mb-4 bg-primary bg-opacity-50 rounded">INTERMEDIATE</Card.Title>
                        <Card.Text className="fw-bold fs-4">
                            Feel pretty confident? Learn more challenging skills and pieces.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem', height: '32rem' }} className="bg-success bg-opacity-25">
                    <Card.Body>
                        <Card.Img className="center" style={{ height: '210px', borderRadius: '10px' }} variant="top" src="https://images.squarespace-cdn.com/content/v1/5b27d2c125bf0296b6430822/1535471674668-F5YO4WOE00LR7V8LY9GO/Intermediate-Level.jpg?format=1000w" />
                        <Card.Title className="fw-bolder fs-2 mt-5 mb-4 bg-primary bg-opacity-50 rounded">ADVANCED</Card.Title>
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