import React from "react";

const Item = ({img, title}) => {
  return (
    <div className="w-[20%] sm:w-[15%] md:w-[13%] flex-none ml-2 " style={{scrollsnapAlign: 'start'}}>
      <img
        src={img}
        alt=""
        className="rounded-full"
      />
      <h2 className="text-center text-xl font-[Poppins]">{title}</h2>
    </div>
  );
};

export default Item;
