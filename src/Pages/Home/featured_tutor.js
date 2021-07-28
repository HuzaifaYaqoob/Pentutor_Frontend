import React from 'react';
import ReactCardCarousel from 'react-card-carousel';

const Card = () => {
    return (
        <div className="card-style">
            <div className="teacher-image">
                <img className="teacher-image-style" src="/images/user-image.png"
                    alt="img" width="100px" height="100px" />
            </div>
            <div className="teacher-id mt-2">
                <div className="t-id">ID: PT149</div>
            </div>
            <div className="teacher-detail">
                <p><span className="fw-bold">Masters</span> in Math</p>
                <p><span className="fw-bold">Masters</span> in Math, Physics</p>
                <p><span className="fw-bold">Experience:</span> 21 Years</p>
            </div>
            <div className="view-profile">
                <button className="btn btn-primary">View Profile</button>
            </div>
        </div>
    )
}

const MyCarousel = () => {

    return (
        <div>
            <h1 className="text-center">Featured Tutors</h1>
            <ReactCardCarousel disable_keydown={true} spred={"wide"}>
                <Card />
                <Card />
                <Card />
                <Card />

            </ReactCardCarousel>
        </div >
    );

}

export default MyCarousel;
