import React, { useContext } from 'react'
import CategoryFilter from './CategoryFilter'
import { ProductConext } from '../../context/MainContext'
import BrandFilter from './BrandFilter'

export default function SideBarFilter() {

  return (
    <div classNameName='border-2 p-3'>
        <CategoryFilter/>
        <BrandFilter/>
    </div>
  )
}
