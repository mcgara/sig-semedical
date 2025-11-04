import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import CarouselBand from "../components/CarouselBand"
import SideTools from "../components/SideTools"
import ContactabilidadIcon from "../assets/icons/contactabilidad.svg"

export default function Home() {
  return (
    <Container fluid>
      <CarouselBand />

      <hr />

      <Row>
        <Col className="col-3"><SideTools /></Col>

        <Col>
          <Container>
            <Row xs="auto">
              <Col className="d-flex justify-content-center">
                <Link to="/contactabilidad">
                  <Button variant="primary" className="p-3 rounded-5 border-4" style={{ backgroundColor: `transparent` }}>
                    <img src={ContactabilidadIcon} height="60rem" />
                    <h6 className="m-0">Contactabilidad</h6>
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
