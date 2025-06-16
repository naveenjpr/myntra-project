import React, { useContext, useEffect, useState } from "react";
import { ProductConext } from "../../context/MainContext";

export default function RatingFilter() {
    let { setRateFilterState } = useContext(ProductConext);

  let [allCheckCat, setAllCheckCat] = useState([]);
  let ratingList = [1, 2, 3, 4, 5];

  // ✅ Checkbox logic
  let getCheckValue = (event) => {
    if (event.target.checked) {
      setAllCheckCat([...allCheckCat, event.target.value]);
    } else {
      let filterData = allCheckCat.filter(
        (items) => items !== event.target.value
      );
      setAllCheckCat(filterData);
    }
  };

  // ✅ Update rating filter in context
  useEffect(() => {
    setRateFilterState(allCheckCat.join(","));
  }, [allCheckCat]);

  return (
    <div>
      <div className="mt-4 border-t border-gray-200 p-3 border-2 mb-4 h-[300px] overflow-y-scroll">
        <h3 className="font-medium text-gray-900">RatingFilter</h3>
        <ul>
          {ratingList.map((rating, index) => (
            <li key={index}>
              <input
                type="checkbox"
                value={rating}
                onChange={getCheckValue}
                className="mr-3"
              />
              {rating} Stars & up
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
