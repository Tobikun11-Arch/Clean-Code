"use client"
import React from 'react'
import Button from '../Reusable Components/Button'
import Input from '../Reusable Components/Input'

export default function authForm() {

 const handleWarning = () => {
    window.alert("Its working!")
}

  return (
    <>
      <main className="bg-white w-full h-screen">
        <section className='ml-10'>
        <h1 className="text-black">Reusable Components</h1>
          <Input/> <br />
          <Button onClick={handleWarning}>My btn</Button>
        </section>
      </main>
    </>
  )
}
