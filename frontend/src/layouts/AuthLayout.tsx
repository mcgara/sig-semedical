import { Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';
import ImgWallBackground from "../assets/pared_interior.png"

export default function AuthLayout() {
  return (
    <main>
      <Container fluid style={{
        height: `100vh`,
        backgroundImage: `url(${ImgWallBackground})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`
      }}>
        <Outlet/>
      </Container>
    </main>
  )
}
