import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector'

import ProductCard from '../../components/ProductCard/ProductCard'
import Spinner from '../../components/Spinner/Spinner'

import { CategoryTitle, CategoryContainer } from './CategoryStyle'

function Category() {
  const { category } = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      { isLoading ? <Spinner /> : <CategoryContainer>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </CategoryContainer>}
    </>
  )
}

export default Category
