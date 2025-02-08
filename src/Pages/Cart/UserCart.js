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
    console.log(data)
    return (
        <div className='bg-white p-1 shadow-lg rounded border border-gray-300 w-full mb-5 flex flex-col mx-auto md:mx-px md:flex-row gap-3'>
            <div className='sm:block mx-auto w-52 md:w-32 h-[140px] rounded-md lg:w-52 bg-center bg-cover'
                style={{
                    backgroundImage: `url('${data?.course?.image}')`
                }}
            />
            <div className='flex flex-col justify-between py-1 flex-1 px-5 md:px-0'>
                <div>

                    <h3>{data?.course?.title}</h3>
                    <p className='text-gray-400 text-xs mt-1'>By {data?.user?.first_name} {data?.user?.last_name}</p>
                </div>
                {/* <span className='text-sm'>
                    <span className='mr-3'>
                        <span className='text-yellow-400 mr-3'>4.8</span>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 mr-3' />
                        <span className='text-gray-400'>(579)</span>
                    </span>
                    <span className='text-gray-400'>
                        <span className='text-gray-700'>770</span>
                        students
                    </span>
                </span> */}
            </div>
            <div className='text-gray-500 px-5 md:px-0 md:text-right text-sm '>
                <p
                    className='md:mb-3 cursor-pointer hover:text-gray-700'
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
                <p className='cursor-pointer hover:text-gray-700'>Move to Wishlist</p>
            </div>
            <div className='text-center px-4 pl-2'>
                <p className='text-red-500 font-bold md:mb-3'>{data?.course?.price} PKR</p>
                {/* <p className='text-xs text-gray-400'><del>40k PKR</del></p> */}
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
            <div className='w-full bg-indigo-900 text-center text-white py-3'>
                <h3 className='font-bold text-xl'>My Cart</h3>
            </div>

            <div className='flex flex-col-reverse lg:flex-row items-start justify-between gap-9 container mx-auto bg my-10 px-5'>
                {
                    state.course.cart_items.length > 0 ?
                        <div className='flex-1'>
                            {
                                state.course.cart_items.map((cart_item, index) => {
                                    return (
                                        <CartCourseCard data={cart_item} key={index} />
                                    )
                                })
                            }
                        </div>
                        :
                        <p className="text-center my-10 flex-1">No Cart Item</p>
                }

                <div className='bg-white shadow-lg rouned w-72 p-5'>
                    <div className='flex justify-between'>
                        <p>Total :</p>
                        <span className='text-right'>
                            {/* <p className='text-xs text-gray-400'><del>40k PKR</del></p> */}
                            <p className='text-gray-800 font-bold mb-3'>{total_price} PKR</p>
                        </span>
                    </div>
                    {/* <Link to='/checkout/' className='bg-yellow-450 text-center text-white font-bold block w-full rounded py-3 mt-4 hover:bg-yellow-500'>Checkout</Link> */}
                    <button onClick={CheckoutOrder} className='bg-yellow-450 text-center text-white font-bold block w-full rounded py-3 mt-4 hover:bg-yellow-500'>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default UserCart