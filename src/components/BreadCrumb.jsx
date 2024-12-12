import React from 'react'
import { Link } from 'react-router-dom'


const Breadcrumb = ({ url, first, second, secondurl, third }) => {
    return (
        <>
            <p className="text-[#7B7B7B] flex flex-wrap gap-2 mb-3">
                <Link
                    className="cursor-pointer"
                    to={`#`}
                >
                    Dashboard
                </Link>
                {" "}
                &gt;{" "}
                <Link
                    className="cursor-pointer"
                    to={`${url ? url : '#'}`}
                >
                    {first}
                </Link>
                {second &&
                    <>
                        {" "}
                        &gt;{" "}
                        <Link to={`${secondurl ? secondurl : '#'}`} className={`${!secondurl && 'text-primary font-semibold'} cursor-pointer`}>
                            {second}
                        </Link>
                    </>
                }
                {
                    third && <>
                        {" "}
                        &gt;{" "}
                        <span className="text-primary font-semibold cursor-pointer">
                            {third}
                        </span>
                    </>
                }
            </p>
        </>
    )
}

export default Breadcrumb