import { Container, Card, Button, CardLink, Form } from 'react-bootstrap'
import LogoPrevisaludCobranding from "../../assets/logo_previsalud_cobranding.svg"

export default function Login() {
  return (
    <Container className="h-100 d-flex justify-content-center align-items-center">
      <Form>
        <Card style={{ width: `30rem`, height: `33rem` }} className="rounded-4">
          <Card.Header className="d-flex justify-content-center align-items-center">
            <Card.Img src={LogoPrevisaludCobranding} height="80%" />
          </Card.Header>
          <Card.Body className="px-4">
            <Card.Title className="text-center text-gray-300 fs-2 fw-bold">Bienvenido</Card.Title>
            <Card.Text className="text-center text-gray-100">
              Ingresa tus datos para acceder ó <CardLink className="text-center text-decoration-none" style={{ cursor: `pointer` }}>
                registrarse
              </CardLink>
              .
            </Card.Text>

            <Form.Group className="mb-2" controlId="loginFormUserOrEmail">
              <Form.Label>Nombre de Usuario o Correo</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="loginFormPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group controlId="loginFormCheckboxRemenberMe">
              <Form.Check type="checkbox" className="m-0" label="Recuerdame" />
            </Form.Group>

          </Card.Body>
          <Card.Footer className="d-flex flex-column gap-2 text-center px-4">
            <Button variant="primary" type="submit"><span style={{ color: "white" }}>Iniciar Sesión</span></Button>
            <p>
              <CardLink className="text-center text-decoration-none" style={{ cursor: `pointer` }}>
              ¿Olvidaste tu contraseña?
              </CardLink>
            </p>
          </Card.Footer>
        </Card>
      </Form>
    </Container>
  )
}
