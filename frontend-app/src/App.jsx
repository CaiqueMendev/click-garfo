import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/platform/home"
import { MainLayout } from "./pages/platform/main"

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
