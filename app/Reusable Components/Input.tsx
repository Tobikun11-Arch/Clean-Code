import React, { ReactNode } from 'react'

    interface ButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {

    }

export default function Input({...props}: ButtonProps) {
  return (
   <input {...props} type="text"  className='border-2 text-black outline-none border-black h-9'/>
  )
}
