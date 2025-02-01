import React from 'react'
import { useRef } from 'react'
import Item from '../List/Item';
const Inspiration = ({title}) => {
    const scrollRef = useRef();
      const nextslide = () => {
        scrollRef.current.scrollLeft += 200;
      };
    
      const prevslide = () => {
        scrollRef.current.scrollLeft -= 200;
      };



  return (
    <div className="w-[90%] sm:w-[90%] md:w-[80%] mx-auto mt-4">
      <h1 className="font-[Poppins] text-[1.7rem]">
        Inspiration for your first order
      </h1>

      

      <div className="flex w-full relative items-center">
        {/* left slider */}
        <div
        className="absolute left-0  cursor-pointer z-10 shadow-lg"
        onClick={() => {
          prevslide();
        }}
        ><i className="fa-regular fa-circle-left scale-150 bg-white rounded-full"></i>
         </div>

        {/* list */}
        
        <div className="flex mt-8 flex-nowrap overflow-x-auto space-x-8 items-center relative scroll-smooth" ref={scrollRef} style={{scrollBehavior: "smooth",scrollbarWidth: "none",msOverflowStyle: "none",scrollbarColor: "transparent transparent", scrollSnapType:'x mandatory'}}>
            
            <Item img={"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"} title={'Pizza'} />
            <Item img={"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"} title={'Burger'} />
            <Item img={"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"} title={'Sandwich'} />
            <Item img={"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"} title={'Dhokala'} />
            <Item img={"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"} title={'pizza'} />
            <Item img={"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"} title={'pizza'} />
            <Item img={"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"} title={'pizza'} />
            <Item img={"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"} title={'pizza'} />
            <Item img={"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"} title={'pizza'} />
            <Item img={"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"} title={'pizza'} />
            <Item img={"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"} title={'pizza'} />
            <Item img={"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"} title={'pizza'} />
            <Item img={"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"} title={'pizza'} />
            <Item img={"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"} title={'pizza'} />
        </div>
        {/* right arrow for slide */}
            <div
            className="absolute right-0 cursor-pointer shadow-lg"
            onClick={() => {
                nextslide();
            }}
            >
            <i className="fa-regular fa-circle-right scale-150 bg-white rounded-full"></i>
            </div>
        </div>
      </div>
  )
}

export default Inspiration
