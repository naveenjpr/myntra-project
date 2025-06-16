import React, { useContext, useState } from "react";
import { ProductConext } from "../../context/MainContext";

export default function PriceFilter() {
  let { setstartprice_from, setmaximumprice } = useContext(ProductConext);

  const handlePriceChange = (min, max) => {
    setstartprice_from(min);
    setmaximumprice(max);
  };
  return (
    <div>
      <div className="mt-4 border-t border-gray-200 p-3 border-2 mb-4 h-[300px] overflow-y-scroll">
        <h3 className="font-medium text-gray-900">PriceFilter</h3>
        <ul
          role="list"
          className="px-2 py-0 font-medium text-gray-900 space-y-2"
        >
          <li className="flex items-center">
            <input
              type="radio"
              name="price"
              onChange={() => handlePriceChange(10, 250)}
              className="mr-2"
            />
            <p>Rs. 10 to Rs. 250</p>
          </li>
          <li className="flex items-center">
            <input
              type="radio"
              name="price"
              onChange={() => handlePriceChange(250, 500)}
              className="mr-2"
            />
            <p>Rs. 250 to Rs. 500</p>
          </li>
          <li className="flex items-center">
            <input
              type="radio"
              name="price"
              onChange={() => handlePriceChange(500, 1000)}
              className="mr-2"
            />
            <p>Rs. 500 to Rs. 1000</p>
          </li>
          <li className="flex items-center">
            <input
              type="radio"
              name="price"
              onChange={() => handlePriceChange(1000, 2000)}
              className="mr-2"
            />
            <p>Rs. 1000 to Rs. 2000</p>
          </li>
          <li className="flex items-center">
            <input
              type="radio"
              name="price"
              onChange={() => handlePriceChange(2000, 4000)}
              className="mr-2"
            />
            <p>Rs. 2000 to Rs. 4000</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
