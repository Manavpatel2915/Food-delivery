import React from "react";
import { Link } from "react-router-dom";

const Item = ({img, title,routeval}) => {
  return (
      <div className="w-[20%] sm:w-[15%] md:w-[13%] flex-none ml-2 " style={{scrollsnapAlign: 'start'}}>
        <Link to={routeval}>
        <img
          src={img}
          alt=""
          className="rounded-full"
        />
        <h2 className="text-center text-xl font-[Poppins]">{title}</h2>
        </Link>
      </div>
  );
};

export default Item;
