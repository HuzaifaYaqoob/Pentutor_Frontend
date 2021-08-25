

const FormSection = (props) => {
    const {className , otherProps} = props
    return (
        <div className={'bg-indigo-900 relative px-5'  + ' ' +  className} {...otherProps} >
            <div className='container lg:mx-auto relative '>
                {
                    props.hideLabel ?
                        <></>
                        :
                        <div className='bg-yellow-450 rounded-lg absolute top-0 transform -translate-y-full px-3 cursor-pointer py-2 rounded-bl-none rounded-br-none z-30'>
                            <h3 className='whitespace-nowrap text-xl capitalize text-indigo-900 font-semibold'>{props.formHeading}</h3>
                        </div>
                }
            </div>
            <div className='py-10'>
                {props.children}
            </div>
        </div>
    )
}

export default FormSection