import { Container, Carousel } from 'react-bootstrap';
import PrevisaludScreenImg from '../assets/previsalud_pantalla.png';

function CarouselBand() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <Container fluid style={{
            height: `30vh`,
            backgroundImage: `url(${PrevisaludScreenImg})`,
            backgroundSize: `45%`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`
          }}>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBand;