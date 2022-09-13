import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ProductCard from '../../components/ProductCard/ProductCard'
import { CategoriesContext } from '../../context/CategoriesContext'

import { CategoryTitle, CategoryContainer } from './CategoryStyle'

function Category() {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </CategoryContainer>
    </>
  )
}

export default Category
