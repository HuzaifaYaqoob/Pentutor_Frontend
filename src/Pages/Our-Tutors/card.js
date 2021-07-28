import React from 'react'

const Card = () => {
    return (
        <div className="tutor-card border mt-5 p-3">
            <div className="tutor-image">
                <img className="tutor-image-style" src="/images/user-image.png"
                    alt="img" width="100px" height="100px" />
            </div>
            <div className="tutor-id mt-2">
                <div className="t-id">ID: PT149</div>
            </div>
            <div className="tutor-detail p-3">
                <div className="tutor-qualification">
                    <div><h6 className="t-q-d">Qualification:</h6></div>
                    <div><h6>Masters</h6></div>
                </div>
                <div className="tutor-qualification">
                    <div><h6 className="t-q-d">Experience:</h6></div>
                    <div><h6>21 Years</h6></div>
                </div>
                <div className="tutor-qualification">
                    <div><h6 className="t-q-d">Areas To Teach</h6></div>
                    <div><h6>Johar Town</h6></div>
                </div>
                <div className="tutor-qualification">
                    <div><h6 className="t-q-d">Age:</h6></div>
                    <div><h6>39</h6></div>
                </div>
                <div className="tutor-qualification">
                    <div><h6 className="t-q-d">Teach Online</h6></div>
                    <div><h6>Yes</h6></div>
                </div>
            </div>
            <div className="view-tutor-profile">
                <button className="btn btn-secondary">View Full Profile</button>
                <button className="btn btn-success">Take Trial Class</button>
            </div>
        </div>
    )
}
export default Card