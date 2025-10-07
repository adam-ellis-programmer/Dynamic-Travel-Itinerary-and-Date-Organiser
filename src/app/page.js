'use client'
import BookingSlot from '@/components/BookingSlot'
import AddItinerary from '@/components/ItineraryDays'
import React, { useState } from 'react'
const Home = () => {
  const [bookignDetails, setBookignDetails] = useState([])
  const handleSubmit = () => {
    //...
    console.log(bookignDetails)
    console.log(typeof bookignDetails)

    // bookignDetails.forEach((item) => console.log(item))
  }
  return (
    <div className='w-[90%]  mx-auto'>
      <h1 className='text-4xl my-10 capitalize'>add trip screen</h1>
      <div className='grid md:grid-cols-3 gap-2'>
        <BookingSlot
          bookignDetails={bookignDetails}
          setBookignDetails={setBookignDetails}
        />
        <AddItinerary
          bookignDetails={bookignDetails}
          setBookignDetails={setBookignDetails}
        />
        <div className=' '>
          <div className='flex justify-end'>
            <button
              onClick={handleSubmit}
              className='bg-emerald-500 p-4 rounded-2xl'
            >
              {' '}
              Enter Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
