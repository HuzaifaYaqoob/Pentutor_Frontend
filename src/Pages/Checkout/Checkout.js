
import { DropDownInput, TextInput } from "../Dashboard/FormSection/Form"
import { CartCourseCard } from "../Cart/UserCart"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react"
import SelectDropDown from "../../components/FormSection/Dropdown"


const Checkout = () => {
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
    return (
        <div>
            <div className='w-full color-green text-center text-white py-3'>
                <h3 className='font-bold text-xl'>Checkout</h3>
            </div>
            <div className='container px-5 lg:px-0 mx-auto flex flex-col lg:flex-row items-start justify-between gap-5 my-10'>
                <div className='flex-1 w-full border rounded border-gray-300 px-10 py-8'>
                    <div>
                        <h3 className='mb-5'>Billing Address</h3>
                        <div className='md:w-96'>
                            <SelectDropDown
                                placeholder='Select Country'
                                value={''}
                                title='Select Country'
                                options={[
                                    { label: 'Palkistan', value: 'Pakistan' },
                                    { label: 'Dubai', value: 'Dubai' }
                                ]}
                            />
                            {/* <DropDownInput placeholder='Pakistan' data={['Pakistan', 'US']} /> */}
                        </div>
                    </div>
                    <div className='block md:flex items-center gap-8 my-5'>

                        <TextInput placeholder='Enter Your Name' Label='Name On Card' />
                        <TextInput placeholder='Enter Your Card Number' Label='Card Number' />
                    </div>
                    <div className='block md:flex items-center gap-8 my-5'>
                        <TextInput placeholder='MM/YY' Label='Card Expiry Date' />
                        <TextInput placeholder='Enter Your Security Code' Label='CSV' />
                    </div>
                    <div>
                        <div className='md:w-96'>
                            <TextInput placeholder='Zip Code' Label='Zip / Postal Address' />
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-md w-80 rounded p-4 mt-5 lg:mt-0'>
                    <div className='mb-8 text-center'>
                        <h3 className='text-xl font-bold text-gray-800'>Summary</h3>
                    </div>
                    <span className='flex items-center justify-between'>
                        <span>Total:</span>
                        <span className='font-medium text-gray-900 '>{total_price} PKR</span>
                    </span>
                    <button className='color-green rounded text-center block py-4 w-full mt-16 text-white font-medium'>Complete Payment</button>
                </div>
            </div>
            <div className="max-w-4xl px-9">
                {
                    state.course.cart_items.map((cart_item, index) => {
                        return (
                            <CartCourseCard data={cart_item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Checkout