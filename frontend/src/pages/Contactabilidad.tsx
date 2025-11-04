import { Container, Row, Col, Form, Dropdown } from 'react-bootstrap';
import ContactList from "../components/contactabilidad/ContactList"
import FilterIcon from "../assets/icons/filter.svg"
import ContactFormUpdate from '../components/contactabilidad/ContactFormUpdate';

export default function Contactabilidad() {
  return (
    <Container fluid className="py-3" style={{ height: "93vh", marginTop: "7vh" }}>
      <Row className="h-100">
        <Col xs="3" className="d-flex flex-column h-100">

          <div className="mb-2 d-flex flex-row">
            <Form.Control
              type="text"
              id="inputSearchContactabilidad"
              aria-describedby="HelpBlockinputSearchContactabilidad"
              placeholder="Busqueda por OCT"
            />
            <Dropdown className="no-caret">
              <Dropdown.Toggle variant="primary" id="dropdown-basic" className="border-2 rounded-start-0 p-1" style={{ backgroundColor: `transparent` }}>
                <img src={FilterIcon}  />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as="button">OCT</Dropdown.Item>
                <Dropdown.Item as="button">Identificación</Dropdown.Item>
                <Dropdown.Item as="button">Telefono</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="flex-grow-1 overflow-auto">
            <ContactList />
          </div>

        </Col>
        <Col>
          <ContactFormUpdate />
        </Col>
      </Row>
    </Container>
  )
}
