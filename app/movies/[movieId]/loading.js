import React from 'react'
import Image from 'next/image'
import Loading from "../../components/images/loading.svg"
export default function loading() {
  return (
    <div className=' mx-auto max-w-lg p-1 min-h-screen'>
      <h2 className='m-4 text-2xl font-bold'>Loading....</h2>
      <Image src={Loading} alt='loading' width={100} height={100} />
    </div>
  )
}