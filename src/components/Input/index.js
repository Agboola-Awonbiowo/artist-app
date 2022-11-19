import React from 'react'

function InputField({placeholder, onChange, value}) {
  return (
    <div>
        <input type='textarea' className='bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  )
}

export default InputField