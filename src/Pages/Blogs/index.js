import React from 'react'
import './blog.css'

const Card = () => {
    return (
        <div className="online-class-card-style border mt-3">
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

const Blogs = () => {
    return (
        <div className="container coaching-card-container p-3">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card />
            </div>
        </div>
    )
}
export default Blogs
