import React from 'react'
import MainSec from "./main-sec";
import Card from "./card";

const Courses = () => {
    return (
        <div>
            <MainSec />
            <div className="card-container mt-5">
                <div className="col-lg-6 col-md-6 col-sm-12 p-4">
                    <h1 className="card-title text-center">Classes</h1>
                    <Card first={"A Level"} second={"Bechelors Degree"} third={"Commerce Degrees"} fourth={"Engineering"} fifth={"Law Degrees"} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 p-4">
                    <h1 className="card-title text-center">Subjects</h1>
                    <Card first={"Accounting"} second={"Commerce"} third={"Geography"} fourth={"English"} fifth={"Math"} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 p-4">
                    <h1 className="card-title text-center">Tests/Exams</h1>
                    <Card first={"A Level"} second={"Bechelors Degree"} third={"Commerce Degrees"} fourth={"Engineering"} fifth={"Law Degrees"} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 p-4">
                    <h1 className="card-title text-center">Languages</h1>
                    <Card first={"Arabic"} second={"Chinese"} third={"French"} fourth={"German"} fifth={"English"} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 p-4">
                    <h1 className="card-title text-center">Short Courses</h1>
                    <Card first={"A Level"} second={"Bechelors Degree"} third={"Commerce Degrees"} fourth={"Engineering"} fifth={"Law Degrees"} />
                </div>
            </div>
        </div>
    )
}

export default Courses
