import React from 'react'
import ReactCardCarousel from 'react-card-carousel';

const Card = () => {
    return (
        <div className="online-class-card-style">
            <div className="class-image">
                <img className="class-image-style" src="/images/user-image.png"
                    alt="img" width="100%" height="100%" />
            </div>
            <div className="individual-coaching">
                <h6>Online Individual Coaching </h6>
            </div>
            <div className="teacher-detail">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Enim nascetur vitae gravida amet. Massa sit nunc magna vitae.
                    Molestie ultrices facilisi egestas aliquam nunc. Fringilla potenti
                </p>
            </div>
            <div className="view-profile">
                <button className="btn btn-primary">View Profile</button>
            </div>
        </div>
    )
}

const OnlineTutoring = () => {
    return (
        <div>
            <h1 className="text-center">Online Tutoring</h1>
            <ReactCardCarousel disable_keydown={true} spread={"wide"}>
                <Card />
                <Card />
                <Card />

            </ReactCardCarousel>
        </div>
    )
}

export default OnlineTutoring
