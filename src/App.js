import './style.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView'
import ContactsView from './views/ContactsView'
import NotFoundView from './views/NotFoundView'
import CategoriesView from './views/CategoriesView'
import ProductsView from './views/ProductsView'
import SearchView from './views/SearchView'
import CompareView from './views/CompareView'
import WishListView from './views/WishListView'
import ShoppingCartView from './views/ShoppingCartView'
import ProductDetailsView from './views/ProductDetailsView'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/categories' element={<CategoriesView />} />
        <Route path='/products' element={<ProductsView />} />
        <Route path='/products/:title' element={<ProductDetailsView />} />
        <Route path='/contacts' element={<ContactsView />} />
        <Route path='/search' element={<SearchView />} />
        <Route path='/compare' element={<CompareView />} />
        <Route path='/wishlist' element={<WishListView />} />
        <Route path='/shopping-cart' element={<ShoppingCartView />} />
        <Route path='*' element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
