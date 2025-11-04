import { Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';
import NavbarApp from "../components/NavbarApp"

export default function MainLayout() {
  return <>
    <Container fluid className="p-0" style={{ height: "93vh", marginTop: "7vh" }}>
      <header>
        <NavbarApp />
      </header>

      <main>
          <Outlet/>
      </main>

    </Container>
  </>
}
