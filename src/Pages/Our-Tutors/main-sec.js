import React from "react";

const MainSec = () => {
    return (
        <div>
            <div className="welcome-to-pen-tutor">
                <h1 className="pen-tutor">Certified Tutors</h1>
                <div className="studnt-query-button-view">
                    <button type="button" className="studnt-query-button">
                        Search Tutor
                    </button>
                </div>
            </div>
            <div className="search-tutor-form">
                <form className="input-form row g-3">
                    <div className="col-lg-4 col-md-4 col-md-12">
                        <input
                            type="text"
                            className="form-control"
                            id="ex3"
                            placeholder="Enter Any Subject"
                            size="30"
                        />
                    </div>
                    <div className="col-lg-4 col-md-4 col-md-12">
                        <input
                            type="text"
                            className="form-control"
                            id="ex3"
                            placeholder="Enter Any Grade To Search"
                            size="30"
                        />
                    </div>
                    <div className="col-lg-4 col-md-4 col-md-12">
                        <input
                            type="text"
                            className="form-control"
                            id="ex3"
                            placeholder="Enter City / Area To Search"
                            size="30"
                        />
                    </div>
                </form>
            </div>
            <div className="search-button-tutor col-auto">
                <button type="button" className="btn btn-primary">
                    Search
                </button>
            </div>
        </div>
    );
};

export default MainSec;
