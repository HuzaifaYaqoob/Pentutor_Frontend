import React from 'react'
import Card from "./card";
const RegisteredTutors = () => {
    return (
        <div>
            <h1 className="card-title text-center mt-5">Registered Tutors</h1>
            <div className="tutor-card-container mt-3 p-4">
                <div className="col-lg-6 col-md-6 col-sm-12 p-4">
                    <Card />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 p-4">
                    <Card />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 p-4">
                    <Card />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 p-4">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default RegisteredTutors