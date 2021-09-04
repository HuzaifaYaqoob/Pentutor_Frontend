import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Link } from "react-router-dom"


export const CartCourseCard = () => {
    return (
        <div className='bg-white p-1 shadow-lg rounded border border-gray-300 w-full mb-5 flex flex-col mx-auto md:mx-px md:flex-row gap-3'>
            <img className='sm:block mx-auto w-52 md:w-32 lg:w-52 ' src={process.env.PUBLIC_URL + '/images/blog/blogImage.png'} alt="" />
            <div className='flex flex-col justify-between py-1 flex-1 px-5 md:px-0'>
                <div>

                    <h3>Adobe Photoshop : Beginner to Advance in 1 Month</h3>
                    <p className='text-gray-400 text-xs mt-1'>By Ibrahim Akram</p>
                </div>
                <span className='text-sm'>
                    <span className='mr-3'>
                        <span className='text-yellow-400 mr-3'>4.8</span>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 mr-3' />
                        <span className='text-gray-400'>(579)</span>
                    </span>
                    <span className='text-gray-400'>
                        <span className='text-gray-700'>770</span>
                        students
                    </span>
                </span>
            </div>
            <div className='text-gray-500 px-5 md:px-0 md:text-right text-sm '>
                <p className='md:mb-3 cursor-pointer hover:text-gray-700'>Remove</p>
                <p className='cursor-pointer hover:text-gray-700'>Move to Wishlist</p>
            </div>
            <div className='text-center px-10'>
                <p className='text-red-500 font-bold md:mb-3'>20K PKR</p>
                <p className='text-xs text-gray-400'><del>40k PKR</del></p>
            </div>
        </div>
    )
}


const UserCart = () => {
    return (
        <div>
            <div className='w-full bg-indigo-900 text-center text-white py-3'>
                <h3 className='font-bold text-xl'>My Cart</h3>
            </div>

            <div className='flex flex-col-reverse lg:flex-row items-start justify-between gap-9 container mx-auto bg my-10 px-5'>
                <div className='flex-1'>
                    <CartCourseCard />
                    <CartCourseCard />
                    <CartCourseCard />
                </div>
                <div className='bg-white shadow-lg rouned w-72 p-5'>
                    <div className='flex items-end justify-between'>
                        <p>Total :</p>
                        <span className='text-right'>
                            <p className='text-xs text-gray-400'><del>40k PKR</del></p>
                            <p className='text-gray-800 font-bold mb-3'>20K PKR</p>
                        </span>
                    </div>
                    <Link to='/checkout/' className='bg-yellow-450 text-center text-white font-bold block w-full rounded py-3 mt-4 hover:bg-yellow-500'>Checkout</Link>
                </div>
            </div>
        </div>
    )
}

export default UserCart