import { ListGroup, Container, Row, Col } from 'react-bootstrap';

export interface ContactItemProps {
  oct: string
  identificacion: string
  fecha_oct: Date
  linea: string
}

export default function ContactItem({ oct, identificacion, fecha_oct, linea }: ContactItemProps) {
    return (
      <ListGroup.Item as="button" className="btn-primary border-1" style={{ backgroundColor: "transparent" }}>
        <Container fluid>

          <Row>
            <Col>

              <Row>
                <Col><span>{oct}</span></Col>
                <Col><span>{identificacion}</span></Col>
              </Row>

              <Row>
                <Col><span>{fecha_oct.toLocaleString().split(",")[0]}</span></Col>
                <Col><span>{linea}</span></Col>
              </Row>
              
            </Col>

            <Col xs="1" className="d-flex align-items-center">
              <span className="text-light fs-4">{">"}</span>
            </Col>
          </Row>
          
        </Container>
      </ListGroup.Item>
    )
}
