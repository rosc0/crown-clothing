import { useSelector } from 'react-redux'
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/categories.selector'

import Spinner from '../../components/Spinner/Spinner'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title]
          return <CategoryPreview key={title} title={title} products={products} />
        })
      )}
    </>
  )
}

export default CategoriesPreview
