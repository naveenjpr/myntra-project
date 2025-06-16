import React, { useContext } from 'react'
import CategoryFilter from './CategoryFilter'
import { ProductConext } from '../../context/MainContext'
import BrandFilter from './BrandFilter'
import PriceFilter from './PriceFilter'
import RatingFilter from './RatingFilter'

export default function SideBarFilter() {

  return (
    <div classNameName='border-2 p-3'>
        <CategoryFilter/>
        <BrandFilter/>
        <RatingFilter/>
        <PriceFilter/>
    </div>
  )
}
