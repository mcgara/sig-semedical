import { Outlet } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
import LogoPrevisaludCobranding from "../assets/logo_previsalud_cobranding.svg"
import IconMenu from "../assets/menu-button-2.svg"

export default function MainLayout() {
  return <>
    <Container fluid className="p-0" style={{ height: `100vh` }}>
      <header>
        <Navbar className="bg-body-tertiary">
          <Container fluid className="d-flex justify-content-start align-items-center px-4">

            <div className="d-flex justify-content-start align-items-center gap-4">
              <img
                alt="Icon Menu"
                src={IconMenu}
                height="26rem"
                className="d-inline-block align-top"
                />

              <Navbar.Brand href="/">
                <img
                  alt="Logo Previsalud Cobranding"
                  src={LogoPrevisaludCobranding}
                  height="32rem"
                  className="d-inline-block align-top"
                  />
              </Navbar.Brand>
            </div>

            <p className="fs-3 m-0 text-light">|</p>
            <Container className="m-0">
              <p className="text-light m-0 fw-normal" >Previsalud</p>
              <p className="text-light m-0 fw-normal" >Farmacias en Red</p>
            </Container>
          </Container>
        </Navbar>
      </header>

      <main>
          <Outlet/>
      </main>

    </Container>
  </>
}
