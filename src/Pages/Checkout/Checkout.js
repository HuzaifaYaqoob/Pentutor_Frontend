
import { DropDownInput, TextInput } from "../Dashboard/FormSection/Form"
import { CartCourseCard } from "../Cart/UserCart"


const Checkout = () => {
    return (
        <div>
            <div className='w-full color-green text-center text-white py-3'>
                <h3 className='font-bold text-xl'>Checkout</h3>
            </div>
            <div className='container mx-auto flex items-start justify-between gap-5 my-10'>
                <div className='flex-1 border rounded border-gray-300 px-10 py-8'>
                    <div>
                        <h3 className='mb-5'>Billing Address</h3>
                        <div className='w-96'>
                            <DropDownInput placeholder='Pakistan' data={['Pakistan', 'US']} />
                        </div>
                    </div>
                    <div className='flex items-center gap-8 my-5'>

                        <TextInput placeholder='Enter Your Name' Label='Name On Card' />
                        <TextInput placeholder='Enter Your Card Number' Label='Card Number' />
                    </div>
                    <div className='flex items-center gap-8 my-5'>

                        <TextInput placeholder='MM/YY' Label='Card Expiry Date' />
                        <TextInput placeholder='Enter Your Security Code' Label='CSV' />
                    </div>
                    <div>
                        <div className='w-96'>
                            <TextInput placeholder='Zip Code' Label='Zip / Postal Address' />
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-md w-80 rounded p-4'>
                    <div className='mb-8 text-center'>
                        <h3 className='text-xl font-bold text-gray-800'>Summary</h3>
                    </div>
                    <span className='flex items-center justify-between'>
                        <span>Total:</span>
                        <span className='font-medium text-gray-900 '>20K PKR</span>
                    </span>
                    <button className='color-green rounded text-center block py-4 w-full mt-16 text-white font-medium'>Complete Payment</button>
                </div>
            </div>
            <div className="max-w-4xl px-9">
                <CartCourseCard />
            </div>
        </div>
    )
}

export default Checkout