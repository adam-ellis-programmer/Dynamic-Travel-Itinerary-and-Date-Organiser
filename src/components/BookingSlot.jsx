'use client'
import React, { useState, useEffect } from 'react'
const BookingSlot = ({ setBookignDetails, bookignDetails }) => {
  const [bookingSlots, setBookingSlots] = useState([
    { dates: [''], places: 10, month: '', year: '', show: true },
  ])

  useEffect(() => {
    return () => {
      setBookignDetails((prev) => ({
        ...prev,
        bookingSlots: bookingSlots,
      }))
      // setBookignDetails((prev) => [...prev, bookingSlots])
    }
  }, [bookingSlots, setBookignDetails])

  // prettier-ignore
  const months = ['January', 'Febuary', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December']

  const years = ['2025', '2026', '2027', '2028', '2029']
  //
  const updateDateInSlot = (slotIndex, dateIndex, value) => {
    const [year, month, day] = value.split('-')
    const date = `${day}/${month}/${year}`

    const updated = [...bookingSlots]
    // console.log(updated[slotIndex])
    updated[slotIndex].dates[dateIndex] = date
    setBookingSlots(updated)
    console.log(bookingSlots)
  }

  const addSlot = () => {
    console.log('added slot...')
    setBookingSlots([
      ...bookingSlots,
      { dates: [''], places: 10, month: '', year: '', show: true },
    ])
  }

  const addDateToSlot = (slotIndex) => {
    console.log(slotIndex)
    const updated = [...bookingSlots]
    updated[slotIndex].dates.push('')
    setBookingSlots(updated)
  }

  const deleteDate = (slotIndex, dateIndex) => {
    const updated = [...bookingSlots]

    updated[slotIndex].dates = updated[slotIndex].dates.filter(
      (_, i) => i !== dateIndex
    )
    setBookingSlots(updated)
  }

  const deleteBookingSlot = (slotIndex) => {
    console.log(slotIndex)

    let updated = [...bookingSlots]
    // const obj = updated[slotIndex]
    // updated = updated.filter((item, i) => i !== slotIndex)
    // console.log(updated)
    // console.log(obj.dates)
    // setBookingSlots(updated)
    //  or do it this way
    setBookingSlots(bookingSlots.filter((_, i) => i !== slotIndex))
  }

  const handleMonthChange = (slotIndex, value) => {
    // ....
    const updated = [...bookingSlots]
    updated[slotIndex].month = value
    console.log(updated)
  }
  const handleYearhChange = (slotIndex, value) => {
    // ....
    const updated = [...bookingSlots]
    updated[slotIndex].year = value
    setBookignDetails(updated)
  }
  const handleBookingNumberChange = (slotIndex, value) => {
    // ....
    const updated = [...bookingSlots]
    updated[slotIndex].year = value
    setBookignDetails(updated)
  }
  return (
    <div className=' mb-15'>
      <h3 className='text-center text-4xl capitalize'>Booking Dates entery </h3>
      <section>
        <div className='max-w-[1200px] mx-auto p-10'>
          <ul>
            {bookingSlots.map((booking, slotIndex) => {
              return (
                <li
                  key={slotIndex}
                  className='mb-5 border-b pb-10 border-dashed relative'
                >
                  {bookingSlots.length > 1 && (
                    <button
                      onClick={() => deleteBookingSlot(slotIndex)}
                      className='absolute right-0 bg-rose-500 p-2 rounded-2xl'
                    >
                      delete
                    </button>
                  )}
                  <div className=''>
                    <p className='text-2xl capitalize'>bookable dates</p>
                    <p className='text-2xl capitalize'>select dates month</p>
                    <select
                      className='border w-[150px] p-2 text-lg mx-1 rounded'
                      name=''
                      id=''
                      onChange={(e) =>
                        handleMonthChange(slotIndex, e.target.value)
                      }
                    >
                      {months.map((month, i) => {
                        return (
                          <option key={i} value={month}>
                            {month}
                          </option>
                        )
                      })}
                    </select>
                    <select
                      className='border w-[150px] p-2 text-lg mx-1 rounded'
                      name=''
                      id=''
                      onChange={(e) =>
                        handleYearhChange(slotIndex, e.target.value)
                      }
                    >
                      {years.map((year, i) => {
                        return (
                          <option key={i} value={year}>
                            {year}
                          </option>
                        )
                      })}
                    </select>
                  </div>

                  <div className='mt-5'>
                    <p className='text-2xl capitalize'>
                      Number of people per one booking
                    </p>
                    <select
                      onChange={(e) =>
                        handleBookingNumberChange(slotIndex, e.target.value)
                      }
                      className='border p-1 w-[210px]'
                      name=''
                      id=''
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* dates  */}
                  <div className='mt-4'>
                    <p className='text-2xl capitalize'>Available Dates</p>

                    {booking.dates.map((item, dateIndex) => {
                      return (
                        <div key={dateIndex} className='mb-3 flex h-full'>
                          <input
                            onChange={(e) =>
                              updateDateInSlot(
                                slotIndex,
                                dateIndex,
                                e.target.value
                              )
                            }
                            type='date'
                            className='border w-full p-2'
                          />
                          {booking.dates.length > 1 && (
                            <button
                              onClick={() => deleteDate(slotIndex, dateIndex)}
                              className='w-[50px] ml-10 bg-red-500 rounded-full'
                            >
                              X
                            </button>
                          )}
                        </div>
                      )
                    })}
                  </div>
                  <div>
                    <button
                      onClick={() => addDateToSlot(slotIndex)}
                      className='bg-orange-500 p-2 rounded-2xl'
                    >
                      add date
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='flex justify-center'>
          <button
            onClick={addSlot}
            className='bg-orange-500 capitalize p-3 rounded-2xl'
          >
            add block dates
          </button>
        </div>
      </section>
    </div>
  )
}

export default BookingSlot
