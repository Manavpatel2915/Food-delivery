import React from 'react'
import Card from './card'
const CardContainer = () => {
  return (
    <div className='flex max-sm:flex-wrap  w-[90%] sm:w-[90%] md:w-[80%] justify-between mt-12 gap-3 sm:gap-10 mx-auto'>
      <Card img='https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*' head='Order online' desc='Stay home and order to your doorstep'/>
      <Card img='https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*' head='Dining' desc='View the city favourite dining venues'/>
      <Card img='https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*' head='Live events' desc="Discover India's best events & concerts"/>
    </div>
  )
}

export default CardContainer

