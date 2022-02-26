import React from 'react'

const GeneralInputField = ({label, placeholder, name, value, onChange}) => {
  return (
    <div>
        <div className="flex items-center mb-7">
        <label className="w-32 font-poppins text-gray-700 text-sm font-bold">
            {label}
          </label>
          <input
            name={name}
            value={value}
            placeholder={placeholder}
            type="text"
            onChange={onChange}
            className="ml-3 mr-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
    </div>
  )
}

export default GeneralInputField