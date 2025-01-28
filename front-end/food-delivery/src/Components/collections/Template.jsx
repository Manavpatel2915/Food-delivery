import React from 'react'

const Template = ({img}) => {
  return (
    <div className='w-[45%] sm:w-[23%] md:w-[23%] h-[200px] sm:h-[200px] md:h-[250px] bg-[#f1f1f1] rounded-xl overflow-hidden mb-4'>
        <img src={img} alt="" style={{objectFit:'fill', height:'100%', width:'100%'}}/>
    </div>
  )
}

export default Template
