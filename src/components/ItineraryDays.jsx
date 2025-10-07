'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function AddItinerary({ setBookignDetails, bookignDetails }) {
  const [itineraryDays, setItineraryDays] = useState([
    { dayNumber: 1, dayTitle: '', dayDescription: '' },
  ])

  useEffect(() => {
    setBookignDetails((prevState) => ({
      ...prevState,
      itineraryDays,
    }))

    return () => {}
  }, [setBookignDetails, itineraryDays])

  const addDay = () => {
    console.log('adding day....')
    setItineraryDays([
      ...itineraryDays,
      { dayNumber: itineraryDays.length + 1, dayTitle: '', dayDescription: '' },
    ])
  }

  const removeDay = (index) => {
    console.log('removing day ....')
    setItineraryDays(itineraryDays.filter((item, i) => i !== index))
  }
  // console.log(itineraryDays)

  const updateDay = (index, field, value) => {
    const updated = [...itineraryDays] // copy
    // updated[index] is an object === {dayNumber: 1, dayTitle: '', dayDescription: ''}
    updated[index] = { ...updated[index], [field]: value }
    setItineraryDays(updated)
    //
    //
    //
    // console.log(updated[index])
    // console.log('updated : ', updated)
  }

  return (
    <div className=''>
      <h3 className='text-center text-4xl'>Trip Itiniary </h3>
      <ul className=''>
        {itineraryDays.map((item, i) => {
          return (
            <li key={i} className=' mb-5 border-b border-dashed pb-10'>
              <p className=' p-3  capitalize'>day number: {i + 1}</p>
              <div>
                <input
                  className='border-b w-full text-lg p-2 mb-2'
                  type='text'
                  value={item.dayTitle}
                  onChange={(e) => updateDay(i, 'dayTitle', e.target.value)}
                  placeholder='Enter Day Name'
                />
                <textarea
                  className='border w-full rounded h-[100px] p-5'
                  name=''
                  id=''
                  placeholder='Day Description'
                  onChange={(e) =>
                    updateDay(i, 'dayDescription', e.target.value)
                  }
                ></textarea>
              </div>

              {/* day description: {item.dayDescription} */}

              <div className='flex justify-end'>
                {itineraryDays.length > 1 && (
                  <button
                    onClick={() => removeDay(i)}
                    className='bg-rose-500 p-2 rounded-2xl'
                  >
                    remove
                  </button>
                )}
              </div>
            </li>
          )
        })}
      </ul>
      {/* itinerary button */}
      <div className='mt-8 flex justify-center'>
        <button
          onClick={addDay}
          className='bg-blue-500 p-7 text-2xl rounded-2xl'
        >
          add +
        </button>
      </div>

      {/* ====================================================== */}
    </div>
  )
}
