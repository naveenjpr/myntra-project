import React, { useContext, useEffect, useState } from "react";
import { ProductConext } from "../../context/MainContext";
import { FaStar } from "react-icons/fa";

export default function RatingFilter() {
  let { setRateFilterState } = useContext(ProductConext);

  // ✅ Update rating filter in context

  return (
    <div>
      <div className="mt-4 border-t border-gray-200 p-3 border-2 mb-4 h-[120px] overflow-auto">
        <h3 className="font-medium text-gray-900">Rating</h3>
        <ul className="text-[13px]">
          <li className="flex items-center">
            <input
              type="radio"
              name="rating"
              onChange={() => setRateFilterState(4)}
              className="mr-3"
            />
            <span className=" flex items-center">
              <FaStar /> &nbsp;4 & above
            </span>
          </li>
          <li className="flex items-center">
            <input
              type="radio"
              name="rating"
              onChange={() => setRateFilterState(3)}
              className="mr-3"
            />
            <span className=" flex items-center">
              <FaStar /> &nbsp;3 & above
            </span>
          </li>
          <li className="flex items-center">
            <input
              type="radio"
              name="rating"
              onChange={() => setRateFilterState(2)}
              className="mr-3"
            />
            <span className=" flex items-center">
              <FaStar /> &nbsp;2 & above
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
