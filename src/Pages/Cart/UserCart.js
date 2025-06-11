import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Link, useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import { removeCourseFromCart } from "../../redux/Actions/CourseActions/CourseActions"
import { apiBaseURL, checkout_order_url } from "../../redux/apiURLs"
import Cookies from "js-cookie"


export const CartCourseCard = ({ data }) => {
    const dispatch = useDispatch()
    const location = useHistory()
    console.log(data)
    return (
        <div className='bg-white rounded-lg w-full flex flex-col mx-auto sm:flex-row overflow-hidden'>
            <div className='sm:block mx-auto h-[220px] sm:h-[140px] w-full sm:w-52 bg-center bg-cover' 
                style={{
                    backgroundImage: `url('${data?.course?.image}')`
                }}
            ></div>
            <div className="flex-1 border border-[#CACBE6] px-3 py-1.5 rounded-lg rounded-t-none sm:rounded-t-lg sm:!rounded-l-none space-y-2 relative">
                <div className="flex items-center justify-between gap-1">
                    <h3 className="text-[#151E2C] font-semibold cursor-pointer line_clamp_1 flex-1" 
                        onClick={() => {
                            location.push(`/courses/${data.slug}/view/`)
                        }}
                    >{data?.course?.title}</h3>
                    <p className='text-green-500 font-bold'>{data?.course?.price} PKR</p>
                </div>
                <div className="flex items-center justify-between gap-1">
                    <p className='text-[#3C3C3C] text-sm'>By {data?.user?.first_name} {data?.user?.last_name}</p>
                    <p className='cursor-pointer text-[#111111] text-sm select-none'>Move to Wishlist</p>
                </div>
                <div className='md:text-right text-sm sm:absolute bottom-0 right-0 sm:px-3 sm:py-2 w-full'>
                    <p
                        className='cursor-pointer text-red-500 font-semibold ml-auto max-w-max'
                        onClick={() => {
                            dispatch(
                                removeCourseFromCart(
                                    { id: data.slug },
                                    () => {
                                        toast.success('Removed from cart')
                                    },
                                    () => {
                                        toast.error('Something went wrong')
                                    }
                                )
                            )
                        }}

                    >Remove</p>
                </div>
                {/* <div className='text-center px-4 pl-2'>
                    <p className='text-xs text-gray-400'><del>40k PKR</del></p>
                </div> */}
                {/* <div className='flex flex-col justify-between py-1 flex-1 px-5 md:px-0'>
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
                </div> */}
            </div>
        </div>
    )
}
CartCourseCard.defaultProps = {
    data: {}
}


const UserCart = () => {
    const state = useSelector(state => state)
    const route = useHistory()
    const [total_price, setTotalPrice] = useState(0)


    useEffect(() => {
        let price = 0
        state.course.cart_items.forEach(itm => {
            price += itm.course.price
        })
        setTotalPrice(price)
    }, [state.course.cart_items])

    const CheckoutOrder = async () => {
        let tid = toast.loading('Please wait...')
        const response = await fetch(apiBaseURL + checkout_order_url,
            {
                method : 'POST',
                headers : {'Authorization' : `Token ${Cookies.get('auth_token')}`},
            }
        )
        let status_code = response?.status
        console.log(status_code)
        if (status_code == '200'){
            const result = await response.json()
            toast.update(tid, {
                render : result.message || 'Something went wrong',
                type : 'success',
                isLoading : false
            })
            route.push(`/order/${result.id}/`)
        }
        else{
            toast.update(tid, {
                render : 'Something went wrong',
                type : 'error',
                isLoading : false
            })
        }
    }

    return (
        <div>
            <div className='w-full bg-indigo-900 text-center text-white py-3 px-4 sm:px-6 md:px-8'>
                <h3 className='font-bold text-xl'>My Cart</h3>
            </div>
            <div className="px-4 sm:px-6 md:px-8 py-10">
                <div className='flex flex-col lg:flex-row items-start justify-between gap-4 max-w-[1300px] w-full mx-auto'>
                    {
                        state.course.cart_items.length > 0 ?
                            <div className='flex-1 space-y-3 w-full'>
                                {
                                    state.course.cart_items.map((cart_item, index) => {
                                        return (
                                            <CartCourseCard data={cart_item} key={index} />
                                        )
                                    })
                                }
                            </div>
                            :
                            <p className="text-center py-10 flex-1 text-sm">No Cart Item</p>
                    }
                    <div className='bg-white border border-[#CACBE6] rounded-lg lg:w-80 p-3 w-full'>
                        <div className='flex justify-between'>
                            <p className="font-medium text-[#151E2C]">Total :</p>
                            <span className='text-right'>
                                {/* <p className='text-xs text-gray-400'><del>40k PKR</del></p> */}
                                <p className='text-green-500 font-bold'>{total_price} PKR</p>
                            </span>
                        </div>
                        <button onClick={CheckoutOrder} className='bg-yellow-450 text-center text-white font-bold block w-full rounded py-3 mt-4 hover:bg-yellow-500'>Checkout</button>
                        {/* <Link to='/checkout/' className='bg-yellow-450 text-center text-white font-bold block w-full rounded py-3 mt-4 hover:bg-yellow-500'>Checkout</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCart