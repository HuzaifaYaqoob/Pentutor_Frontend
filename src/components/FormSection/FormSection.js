

const FormSection = (props) => {
    return (
        <div className='bg-indigo-900 relative'>
            <div className='container mx-auto relative'>
                <div className='bg-yellow-450 rounded-lg absolute top-0 transform -translate-y-full px-3 cursor-pointer py-2 rounded-bl-none rounded-br-none'>
                    <h3 className='whitespace-nowrap text-xl capitalize text-indigo-900 font-semibold'>{props.formHeading}</h3>
                </div>
            </div>
            <div className='py-10'>
                {props.children}
            </div>
        </div>
    )
}

export default FormSection