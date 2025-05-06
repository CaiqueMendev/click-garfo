import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/platform/home"
import { MainLayout } from "./pages/platform/main"
import Restaurants from "./pages/platform/restaurants"

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
