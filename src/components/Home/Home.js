import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="">
            <div className="bg-info bg-opacity-10 p-3">
                <div className="row m-4 bg-success bg-opacity-25 rounded-2 p-3">
                    <div className="col-5">
                        <Card.Img style={{ width: '400px', height: '250px' }} src="https://cms.harlequinfloors.com/wp-content/uploads/2020/01/scottish-ballet-1024x602.jpg" alt="Card image" />
                    </div>
                    <div className="col-7">
                        <Card.Title className="fw-bolder fs-1">Ballet</Card.Title>
                        <Card.Text className="fs-5">
                            Ballet dance developed during the Italian Renaissance, before evolving in France and Russia into a concert dance meant for public performance. This is in the form of a ballet, in which the dance is choreographed with classical music.
                        </Card.Text>
                        <Card.Text className="fw-bold fs-3 mt-5">
                            Course Price: $<span>150</span>
                        </Card.Text>
                    </div>
                </div>
                <div className="row m-4 bg-success bg-opacity-25 rounded-2 p-3">
                    <div className="col-5">
                        <Card.Img style={{ width: '400px', height: '250px' }} src="https://cms.harlequinfloors.com/wp-content/uploads/2020/01/RHH-Dance-Against-Dementia-MattChungPhoto-lo-res-40.jpg" alt="Card image" />
                    </div>
                    <div className="col-7">
                        <Card.Title className="fw-bolder fs-1">Ballroom</Card.Title>
                        <Card.Text className="fs-5">
                            Ballroom dance is a type of partner dance originating at the end of the sixteenth century in France. Commonly used as shorthand for any partner dance, ballroom has today evolved into two main subgenres – standard/smooth and Latin/rhythm.
                        </Card.Text>
                        <Card.Text className="fw-bold fs-3 mt-5">
                            Course Price: $<span>160</span>
                        </Card.Text>
                    </div>
                </div>
                <div className="row m-4 bg-success bg-opacity-25 rounded-2 p-3">
                    <div className="col-5">
                        <Card.Img style={{ width: '400px', height: '250px' }} src="https://cms.harlequinfloors.com/wp-content/uploads/2020/01/Gold-Hi-Shine-MK-ULTRA3-credit-Brian-Slater.jpg" alt="Card image" />
                    </div>
                    <div className="col-7">
                        <Card.Title className="fw-bolder fs-1">Contemporary</Card.Title>
                        <Card.Text className="fs-5">
                            Developed during the mid-twentieth century, contemporary dance is now one of the most popular and technical forms of dance studied and performed professionally, especially in the US and Europe.
                        </Card.Text>
                        <Card.Text className="fw-bold fs-3 mt-5">
                            Course Price: $<span>185</span>
                        </Card.Text>
                    </div>
                </div>
                <div className="row m-4 bg-success bg-opacity-25 rounded-2 p-3">
                    <div className="col-5">
                        <Card.Img style={{ width: '400px', height: '250px' }} src="https://cms.harlequinfloors.com/wp-content/uploads/2020/01/Folk-dance-image-scaled.jpg" alt="Card image" />
                    </div>
                    <div className="col-7">
                        <Card.Title className="fw-bolder fs-1">Folk Dance</Card.Title>
                        <Card.Text className="fs-5">
                            Folk dancing is celebrated worldwide with people of different cultures and religions using various forms of folk dance to portray emotions, stories, historical events or even aspects of daily life.
                        </Card.Text>
                        <Card.Text className="fw-bold fs-3 mt-5">
                            Course Price: $<span>175</span>
                        </Card.Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;