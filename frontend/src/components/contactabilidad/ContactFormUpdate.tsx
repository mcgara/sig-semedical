import { Form, Button, Row, Col } from 'react-bootstrap';


export interface ContactFormUpdateProps {
  identificacion: string
  nombre: string
  telefono1: string
  telefono2: string
  correo: string
  direccion: string
  barrio: string
  departamento: string
  municipio: string
  tipoRespuesta: string
  respuesta: string
  observacion: string
}

export default function ContactFormUpdate() {
  return (
    <Form>
      <Row>
        <Col><Button variant="primary w-100" type="submit">Contactar</Button></Col>
      </Row>

      <Row>
        <Col className="text-center">
          <span>MIPRES</span>
          <p>
            Señor usuario, le contactamos de farmacias en red su operador para dispensación de tecnologías NO PBS.
            Le llamamos porque recibimos un direccionamiento para gestionar su entrega.
            Vamos a gestionar la programación de su entrega.
            Sin embargo primero permitanos hacer una actualización de sus datos.
            Por favor, nos confirma que día y a que punto de dispensación se acercaría a hacer la reclamación.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formIdentification">
            <Form.Label>Identificación</Form.Label>
            <Form.Control type="text" placeholder="Ingresar Identificación" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nombre Paciente</Form.Label>
            <Form.Control type="text" placeholder="Ingresar Nombre del Paciente" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formPhone1">
            <Form.Label>Telefono 1</Form.Label>
            <Form.Control type="text" placeholder="Ingresar Telefono 1" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formPhone2">
            <Form.Label>Telefono 2</Form.Label>
            <Form.Control type="text" placeholder="Ingresar Telefono 2" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="Ingresar Correo" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formDepartamento">
            <Form.Label>Departamento</Form.Label>
            <Form.Control type="text" placeholder="Ingresar Departamento" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formMunicipio">
            <Form.Label>Municipio</Form.Label>
            <Form.Control type="text" placeholder="Ingresar Municipio" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBarrio">
            <Form.Label>Barrio</Form.Label>
            <Form.Control type="text" placeholder="Ingresar Barrio" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formDireccion">
            <Form.Label>Direccion</Form.Label>
            <Form.Control type="text" placeholder="Ingresar Direccion" />
          </Form.Group>
        </Col>

      </Row>
      <Row>
        <Col xs="3">
          <Form.Group className="mb-3" controlId="formTipoRespuesta">
            <Form.Label>Tipo de Respuesta</Form.Label>
            <Form.Control type="text" placeholder="Ingresar Tipo Respuesta" />
          </Form.Group>
        </Col>
        <Col xs="3">
          <Form.Group className="mb-3" controlId="formRespuesta">
            <Form.Label>Respuesta</Form.Label>
            <Form.Control type="text" placeholder="Ingresar Respuesta del Paciente" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formObservacion">
            <Form.Label>Observación</Form.Label>
            <Form.Control type="text" placeholder="Ingresar Observacion" />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}
