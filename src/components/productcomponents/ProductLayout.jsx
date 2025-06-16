import React, { useContext } from 'react'
import { ProductConext } from '../../context/MainContext'
import { Spinner } from 'flowbite-react'
import 'react-responsive-pagination/themes/classic.css';
import ResponsivePagination from 'react-responsive-pagination';
export default function ProductLayout() {
  let {product,loader,pagenumberFilterState,totalPage,setPagenumberFilterState}=useContext(ProductConext)
  return (
  <div>  


    <div class=" grid grid-cols-4 gap-3 relative">

    {loader
      ?
      <div className=' left-[40%] absolute w-[100px] h-[100px] bg-white rounded-[50%] flex justify-center items-center'>   
        <Spinner aria-label="Extra large spinner example" class=" " size="xl" />
      </div> 
     :
      ''
    }
 

      {product.length>=1
          ?
          product.map((productItems,index)=><ProductItems key={index} productData={productItems}/>)
        :
          "No Data Found"
        }
       
    </div>
   <div className='py-7'>
      <ResponsivePagination
        current={pagenumberFilterState}
        total={totalPage}
        onPageChange={setPagenumberFilterState}
      />
   </div> 

    </div>
  )
}

function ProductItems({productData}){

  let {name,image,category_name,price,rating,discount_percentage}=productData

  return(
    <div class="border-2 border-gray-300 border-solid ">
      <div class="">
        <img src={image} alt="" class=""/>
        </div>
      <div class="p-2">
        <p class="font-semibold f">
          {name}
        </p>
        <div class="flex justify-between">
          <p> price: {price}</p>
          <span> Rating:{rating}</span>
        </div>
        <div class="flex justify-between">
          <p> discount: {discount_percentage}%</p>
        </div>
      </div>
      <div class="flex justify-center pb-2"><button class="  border-2 border-[gray] rounded-md p-2 flex hover:bg-slate-200" fdprocessedid="nzllhd">Add to cart</button></div>
  </div>
  )
}