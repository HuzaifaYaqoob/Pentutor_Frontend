import React from 'react'
import './about.css'

const AboutPage = () => {
    return (
        <div className="cover-container d-flex w-100 mx-auto flex-column">
            <main className="">
                <div className="description">
                    <h3>"PEN TUTOR COVERS THE GAP BETWEEN
                        STUDENT AND HIS/HER ACADEMIC SUCCESS"</h3>
                </div>
                <div className="detail px-4">
                    <p className="lead">Pen Tutor is a platform providing all types of national and international learning needs.
                        We provide qualified and dedicated tutors for online, on-campus, individual and group studies.
                        Our tutors are highly specialized and adept in new educational methods and techniques to meet
                        the requirements of this advance era. We enable our students to keep pace with advancement in
                        education and technology through best use of our tutor expertise. We make learning easy,
                        available and affordable for all.
                    </p>
                    <p className="lead">“PEN TUTORS BRING LEARNING TO STUDENTS INSTEAD OF BRINGING STUDENTS TO LEARNING”</p>
                </div>
            </main>
        </div>
    )
}
export default AboutPage