import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
export let ProductConext=createContext()
export default function MainContext({children}) {
  
  let [product, setProduct] = useState([])  // प्रोडक्ट्स की लिस्ट स्टोर करने के लिए
  let [category, setCategory] = useState([]) // कैटेगरीज की लिस्ट स्टोर करने के लिए
  let [brand, setBrand] = useState([]) // ब्रांड्स की लिस्ट स्टोर करने के लिए
  let [loader, setLoader] = useState(false) // लोडिंग स्टेट के लिए
  let [totalPage, setTotalPage] = useState(0) // पेजिनेशन के लिए टोटल पेजेस

    // फिल्टरिंग के लिए स्टेट्स
    let [categoryFilterState, setCategoryFilterState] = useState('') // कैटेगरी फिल्टर
    let [brandFilterState, setBrandFilterState] = useState('') // ब्रांड फिल्टर
    let [sortFilterState, setSortFilterState] = useState(null) // सॉर्टिंग फिल्टर
    let [rateFilterState, setRateFilterState] = useState(null) // रेटिंग फिल्टर
    let [pagenumberFilterState, setPagenumberFilterState] = useState(1) // पेज नंबर
    let [startprice_from, setstartprice_from] = useState("") // price start
    let [maximumprice, setmaximumprice] = useState("") // maximumprice start

  let getProduct=()=>{
    setLoader(true)
    axios.get(`https://wscubetech.co/ecommerce-api/products.php`,{
        params:{
            page: pagenumberFilterState,
            limit: "", // एक पेज पर 12 प्रोडक्ट्स
            categories: categoryFilterState,
            brands: brandFilterState,
            price_from: startprice_from, 
            price_to: maximumprice,
            discount_from:'', 
            discount_to: '',
            rating: rateFilterState,
            sorting: sortFilterState,
        }
    })
    .then((res)=>res.data)
    .then((finalRes)=>{
        setTotalPage(finalRes.toal_pages)
        setProduct(finalRes.data)
        setLoader(false)
        window.scrollTo({
          top:0,
          behavior:"smooth"
        })
    })
  }  
  
  let getCategory=()=>{
    axios.get(`https://wscubetech.co/ecommerce-api/categories.php`)
    .then((res)=>res.data)
    .then((finalres)=>{
        setCategory(finalres.data)
    })
  }

  let getBrand=()=>{
    axios.get(`https://wscubetech.co/ecommerce-api/brands.php`)
    .then((res)=>res.data)
    .then((finalres)=>{
        setBrand(finalres.data)
    })
  }

  useEffect(()=>{
    getCategory();
    getBrand()
  },[])

  useEffect(()=>{
    getProduct();
  },[categoryFilterState,brandFilterState,sortFilterState,rateFilterState,pagenumberFilterState,startprice_from])

  let obj={loader,product,category,brand,categoryFilterState,setCategoryFilterState,brandFilterState,setBrandFilterState,setSortFilterState,totalPage,setPagenumberFilterState,pagenumberFilterState,rateFilterState, setRateFilterState,startprice_from, setstartprice_from,maximumprice, setmaximumprice,maximumprice}
  return (
    <ProductConext.Provider value={obj}>
        {children}
    </ProductConext.Provider>
  )
}
