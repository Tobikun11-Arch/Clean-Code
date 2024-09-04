"use client"
import React from "react";
import axios from 'axios'
import {  QueryClient,
          QueryClientProvider,
          useQuery
        } from '@tanstack/react-query';

    const queryClient = new QueryClient()

  interface Profile {
    name: string,
    id: number
  }

export default function Home() {

  return (
    <QueryClientProvider client={queryClient}>
      <Data />
    </QueryClientProvider>
  )

}


function Data() {
  const dataUrl = 'https://jsonplaceholder.typicode.com/users'

  const { isPending, error, data } = useQuery<Profile[]>({
    queryKey: ['repoData'],
    queryFn: () =>
        axios.get(dataUrl).then((response) =>
        response.data),
  })

  console.log("data", data)

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
   <>
   <ul className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2">
   {data?.map((user)=> (
        <li key={user.id} className="bg-white shadow-md rounded-lg overflow-hidden w-48 h-52 ml-10">
            <p className="text-black">{user.name}</p>
        </li>
   ))}
     </ul>
   </>
  ) 
}
