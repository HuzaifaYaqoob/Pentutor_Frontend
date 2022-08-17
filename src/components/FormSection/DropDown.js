

const DropDown = ({ onChange, ...props }) => {
    const { dropDownList } = props
    return (
        <div className='items-center flex' >
            <select
                name="country" id="SelectCountry" className='block py-3 w-full text-center outline-none rounded ring-1 ring-yellow-300'
                onChange={onChange}
            >
                <option className='text-center text-gray-600' value="Pakistan" disabled selected>Select Your Country</option>
                <option value="Pakistan">Pakistan</option>
            </select>
        </div>
    )
}

export default DropDown