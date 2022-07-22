import './Directory.scss';
import CategoryItem from '../CategoryItem/CategoryItem';

function Directory({ categories }) {

  return (
    <div className='directory-container'>

      { categories.map((category) => {
        return (
          <CategoryItem key={category.id} category={category} />
        )
      })}
      
    </div>
  )
}

export default Directory