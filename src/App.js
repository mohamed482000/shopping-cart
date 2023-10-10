import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import NotFound from './pages/notFound/NotFound'
import ProductsInCart from './pages/cartProducts/ProductsInCart'
import LogIn from './pages/logIn/LogIn'
import Register from './pages/register/Register'
import UserPage from './pages/userPage/UserPage'
import AdminPage from './pages/adminPage/AdminPage'
import UsersPage from './pages/adminPage/UsersPage'
import ProductsPage from './pages/adminPage/ProductsPage'
import { useState } from 'react'
import Edit from './pages/adminPage/EditOnProduct'

function App() {
  const [updateLinks, setUpdateLinks] = useState(false)

  return (
    <BrowserRouter>
      <Header updateLinks={updateLinks} setUpdateLinks={setUpdateLinks} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/productsInCart" element={<ProductsInCart />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/userpage"
          element={
            <UserPage
              updateLinks={updateLinks}
              setUpdateLinks={setUpdateLinks}
            />
          }
        />
        <Route
          path="/adminpage"
          element={
            <AdminPage
              updateLinks={updateLinks}
              setUpdateLinks={setUpdateLinks}
            />
          }
        />
        <Route path="/adminpage/users" element={<UsersPage />} />
        <Route path="/adminpage/products" element={<ProductsPage />} />
        <Route
          path="/adminpage/products/editonproduct/:id"
          element={<Edit />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
