import React from 'react'
import './courses.css'


const MainSec = () => {
    return (
        <div className="main-sec-courses">
            <div className="welcome-to-pen-tutor">
                <h1 className="pen-tutor">Courses Of Your Choice</h1>
                <div className="studnt-query-button-view">
                    <button type="button" className="studnt-query-button">Search Courses</button>
                </div>
            </div>
            <div className="student-query-form">
                <form className="row g-3">

                    <div className="col-auto">
                        <input type="text" className="form-control" id="ex3" size="70" />
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary">Search</button>
                    </div>
                </form>

            </div>
        </div >
    )
}

export default MainSec