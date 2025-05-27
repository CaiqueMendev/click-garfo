import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/platform/home"
import { MainLayout } from "./pages/platform/main"
import { CartOrder } from "./pages/platform/CartOrder"
import MyFavorites from "./pages/platform/favorites"
import Restaurants from "./pages/platform/restaurants/restaurants"
import RegisterRestaurant from "./pages/register-restaurant"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={
            <MainLayout>
              <Home />
            </MainLayout>
          } />
          <Route path="/restaurants" element={
          <MainLayout>
            <Restaurants />
          </MainLayout>
        } />
        <Route path="/cart" element={
          <MainLayout>
            <CartOrder />
          </MainLayout>
        } />
        <Route path="/favorites" element={
          <MainLayout>
            <MyFavorites />
          </MainLayout>
        }/>
        <Route path="/register-restaurant" element={<RegisterRestaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
