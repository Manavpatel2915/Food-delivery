import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({img, head , desc,routeval}) => {
  return (
    <div className='flex flex-col items-center justify-center w-[31%] h-min rounded-2xl overflow-hidden relative max-sm:min-w-[45%]'>
      <Link to={routeval}>
      <img src={img} alt="" className='w-full' style={{objectFit:'cover', maxHeight:'23vh'}}/>
      <div className=' w-full bg-white bg-opacity-50 text-black p-2 my-1'>
        <h1 className='font-[Poppins] font-semibold text-lg'>{head}</h1>
      <p className='font-roboto'>{desc}</p>
      </div>
      </Link>
      
    </div>
  )
}

export default Card
