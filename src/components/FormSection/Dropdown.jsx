import React from 'react'
import Select from 'react-select'

let IsError = false;

const colourStyles = {
    control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
        ...styles,
        boxShadow: isFocused ? 'none' : 'none',
        border: isFocused ? '1px solid #e5e7eb' : '1px solid #e5e7eb',
        color: "#101928",
        fontSize: '0.875rem',
        padding: '0.2rem 0.2rem'
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isDisabled ? 'red' : '#fff',
            color: '#101928',
            fontSize: '0.875rem',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
        };
    },
    menu: styles => ({
        ...styles,
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    }),

}

const errorStyle = {
    control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
        ...styles,
        boxShadow: isFocused ? 'none' : 'none',
        border: IsError && '1px solid #eb3b3b',
        color: "#101928",
        fontSize: '0.875rem',
        padding: '0.2rem 0.2rem'
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isDisabled ? 'red' : '#fff',
            color: '#101928',
            fontSize: '0.875rem',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
        };
    },
    menu: styles => ({
        ...styles,
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    }),

}

const SelectDropDown = ({ title, name, value, onBlur, placeholder, options, onChange, error, disabled }) => {
    if (error) {
        IsError = true
    }

    return (<>
        <div className='flex flex-col gap-2'>
            {title && <p className='text-sm'>{title}</p>}
            <Select
                styles={error ? errorStyle : colourStyles}
                name={name}
                // defaultValue={options.find(itm => itm.value == value).label}
                // defaultInputValue={options.find(itm => itm.value == value).label}
                // value={value}
                // onChange = {onChange}
                onBlur={(e) => { onBlur({ target: { name: name } }) }}
                value={options.find(itm => itm.value == value)}
                options={options}
                onChange={(e) => {
                    onChange && onChange({
                        target: {
                            value: e.value,
                            name: name
                        }
                    })
                }}
                isDisabled={disabled ? disabled : options?.length == 0}
                placeholder={placeholder}
            />
            {/* {error && <span className='text-[#eb3b3b]'>{error}</span>} */}
        </div>
    </>
    )
}

SelectDropDown.defaultProps = {
    title: 'Enter "title" prop',
    placeholder: 'Enter "placeholder" prop',
    options: [],
    name: 'no_name',
    value: 'no_value',
    onBlur: () => { },
    onChange: () => { },
    error: false,
    disabled: false,
}

export default SelectDropDown