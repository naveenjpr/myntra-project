import React, { useContext, useEffect, useState } from "react";
import { ProductConext } from "../../context/MainContext";

export default function CategoryFilter() {
  let { category, categoryFilterState, setCategoryFilterState } =
    useContext(ProductConext);

  let [allCheckCat, setAllCheckCat] = useState([]);

  let getCheckValue = (event) => {
    if (event.target.checked) {
      setAllCheckCat([...allCheckCat, event.target.value]);
    } else {
      let filterData = allCheckCat.filter(
        (items) => items != event.target.value
      );
      setAllCheckCat(filterData);
    }
  };

  useEffect(() => {
    setCategoryFilterState(allCheckCat.join(","));
  }, [allCheckCat]);
  return (
    <div>
      <div className="mt-4 border-t border-gray-200 p-3 border-2 mb-4 h-[300px] overflow-y-scroll">
        <h3 className="font-medium text-gray-900">Categories</h3>
        <ul role="list" className="px-2 py-3 font-medium text-[13px] text-gray-900">
          {category.length >= 1 ? (
            category.map((categoryItems, index) => {
              return (
                <li key={index} className="block px-2 ">
                  <input
                    onChange={getCheckValue}
                    type="checkbox"
                    value={categoryItems.slug}
                    className="mr-3"
                  />
                  {categoryItems.name}
                </li>
              );
            })
          ) : (
            <li>No Category Found</li>
          )}
        </ul>
      </div>
    </div>
  );
}
