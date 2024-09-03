"use client"
import React from 'react'
import Button from '../Reusable Components/Button'

export default function authForm() {

 const handleWarning = () => {
    window.alert("Its working!")
}

  return (
    <>
      <main className="bg-white w-full h-screen">
      <h1 className="text-black">Reusable Components</h1>
      <Button onClick={handleWarning}>My btn</Button>
      </main>
    </>
  )
}
