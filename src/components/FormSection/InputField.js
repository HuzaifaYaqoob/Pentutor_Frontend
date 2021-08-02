

const InputField = (props) =>{
    const {className , ...otherProps } = props
    return(
        <div>
            <input className={className + ' outline-none rounded ring-1 ring-yellow-300 w-full text-center py-3 font-semibold'} {...otherProps} />
        </div>
    )
}

export default InputField