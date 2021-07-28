import React from 'react'

const Card = ({ first, second, third, fourth, fifth }) => {
    return (
        <div className="card mt-3 p-2">
            <button type="button" className="btn btn-light mt-3">{first}</button>
            <button type="button" className="btn btn-light mt-3">{second}</button>
            <button type="button" className="btn btn-light mt-3">{third}</button>
            <button type="button" className="btn btn-light mt-3">{fourth}</button>
            <button type="button" className="btn btn-light mt-3">{fifth}</button>

        </div>
    )
}
export default Card
