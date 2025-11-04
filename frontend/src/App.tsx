import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"
import AuthLayout from "./layouts/AuthLayout"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contactabilidad from "./pages/Contactabilidad";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/contactabilidad" element={<Contactabilidad />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
