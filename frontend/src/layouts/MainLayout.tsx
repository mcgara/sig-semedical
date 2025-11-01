import { Outlet } from "react-router-dom";
import { Container, Navbar } from 'react-bootstrap';
import SidebarModules from "../components/SidebarModules"

export default function MainLayout() {
  return <>
    <Container fluid className="p-0" style={{ height: `100vh` }}>
      <header>
        <Navbar className="bg-body-tertiary">
          <Container fluid className="d-flex justify-content-start align-items-center px-4">

            <div className="d-flex justify-content-start align-items-center gap-4">
              <SidebarModules />

              <Navbar.Brand href="/">
                <Navbar.Text className="text-primary fs-4 fw-bold p-0">
                  Sistema Integral Gestion
                </Navbar.Text>
              </Navbar.Brand>
            </div>

            <p className="fs-3 m-0 text-light">|</p>
            <Container className="text-light fw-normal m-0 d-flex flex-row align-items-center">
              {/* TODO: variar segun la empresa seleccionada, los datos independientes. */}
              <p className="text-light m-0 fw-normal" >Área Aplicacion</p>
              <span className="text-primary fs-5 mx-1">{">"}</span>
              <p className="text-light m-0 fw-normal" >Grupo Modulos</p>
              <span className="text-primary fs-5 mx-1">{">"}</span>
              <p className="text-light m-0 fw-normal" >Subgrupo Modulos</p>
              <span className="text-primary fs-5 mx-1">{">"}</span>
              <p className="text-light m-0 fw-normal" >Modulo</p>
            </Container>

          </Container>

          <Container fluid className="d-flex w-50 justify-content-end align-items-center px-4">

          </Container>
        </Navbar>
      </header>

      <main>
          <Outlet/>
      </main>

    </Container>
  </>
}
