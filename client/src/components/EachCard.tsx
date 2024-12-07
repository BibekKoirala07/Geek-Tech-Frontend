import React, { useState } from "react";

const EachCard = ({ each, onAddToCart }: { each: any; onAddToCart: any }) => {
  const [number, setNumber] = useState(1);
  return (
    <div className="text-center mt-5  bg-gray-400  rounded-lg">
      <div className="flex bg-black justify-center align-middle h-40 rounded-t-lg">
        <p className="text-3xl h-fit  text-white">{each.imagePlaceholder}</p>
      </div>
      <div className="p-3">
        <h1>Name: {each.name}</h1>
        <h4>Category: {each.category}</h4>
        <p>Price: ${each.price}</p>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <input
            className="p-2 col-span-2  rounded-md text-sm"
            type="number"
            value={number}
            onChange={(e: any) => setNumber(e.target.value)}
          />
          <button
            onClick={() => onAddToCart(each.id, number)}
            className="bg-black py-2 px-4 rounded-lg text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default EachCard;
