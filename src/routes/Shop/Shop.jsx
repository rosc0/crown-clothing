import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { fetchCategoriesStart } from '../../store/categories/categories.action'

import CategoriesPreview from '../CategoriesPreview/CategoriesPreview'
import Category from '../Category/Category'

function Shop() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  })

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop
