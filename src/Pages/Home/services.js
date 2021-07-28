import React from 'react'

const Services = () => {
    return (
        <div className="services-container">
            <div className="services">
                <div className="home-tutoring col-lg-8 col-md-8 col-sm-12">
                    <h1>Home Tutoring </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent feugiat lectus vitae porta sit. Ornare orci vitae, sit
                    </p>
                    <button className="btn btn-primary">Read More</button>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <svg className="services-image" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                </div>
            </div>
        </div>
    )
}

export default Services
