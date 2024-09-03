import React, { ReactNode } from 'react'

    interface ButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {

        children: ReactNode;

    }

export default function Button({...props}: ButtonProps) {
  return (
   <input {...props} type="text" />
  )
}
