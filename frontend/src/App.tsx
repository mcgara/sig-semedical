import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"
import AuthLayout from "./layouts/AuthLayout"
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
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
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
