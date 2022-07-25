import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home/Home'
import Navigation from './routes/Navigation/Navigation'
import Authentication from './routes/Authentication/Authentication'

const Shop = () => <div>Shop</div>

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
