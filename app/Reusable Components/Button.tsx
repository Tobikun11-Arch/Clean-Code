
import React, { ReactNode } from 'react'

    interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

        children: ReactNode;

    }

export default function Button({children, onClick, ...props}: ButtonProps) {
  return (
    <button {...props} onClick={onClick} className='bg-red-500 text-black'>
      {children}
    </button>
  )
}
