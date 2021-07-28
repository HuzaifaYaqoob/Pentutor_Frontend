import React from 'react'

const StudentTutors = () => {
    return (
        <div className="student-parent">
            <div class="row  student-background">
                <div class="col-md-7 col-sm-12  order-md-2 for-student">
                    <h2 class="featurette-heading">For Students</h2>
                    <h5>Search Thousands Of Tutors</h5>
                    <ul>
                        <li>Find A Tutor In Your Area</li>
                        <li>Contact & Arrange Lessons With Tutor</li>
                    </ul>
                    <button type="button" className="btn btn-secondary">Read More</button>
                </div>
                <div class="col-md-5 col-sm-12 order-md-1 align-left">
                    <svg class="for-image" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                </div>
            </div>

            <div class="row student-background mt-5">
                <div class="col-md-7 for-student">
                    <h2 class="featurette-heading">For Tutors</h2>
                    <h5>Search Thousands Of Tutors</h5>
                    <ul>
                        <li>Find A Tutor In Your Area</li>
                        <li>Contact & Arrange Lessons With Tutor</li>
                    </ul>
                    <button type="button" class="btn btn-primary">Read More</button>
                </div>
                <div class="col-md-5 for-image">
                    <svg class="" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                </div>
            </div>
        </div>
    )
}

export default StudentTutors
