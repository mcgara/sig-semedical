import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import IconMenu from "../assets/menu-button-2.svg"

function BannerModules() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button onClick={handleShow} className="p-1 border border-0" variant="primary" style={{ backgroundColor: `transparent` }}>
        <img
          alt="Icon Menu"
          src={IconMenu}
          height="24rem"
          className="d-inline-block align-top"
          />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='start'>
        <Offcanvas.Header closeButton className="py-2">
          <Offcanvas.Title>
            <span className="fs-3 fw-bold text-gray-200">Modulos</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr className="m-0" />
        <Offcanvas.Body className="py-2">
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BannerModules