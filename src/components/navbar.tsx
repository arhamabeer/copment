import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRef, useState } from "react";
import AddFileModal from "./addFileModal";

// TODO: authentication on search bar
// const isAuthenticated = false;

function NavScrollExample() {
  const [show, setShow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setShow(true);
  };
  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        className="position-fixed w-100"
        style={{ top: 0, zIndex: 999 }}
      >
        <Container fluid>
          <Navbar.Brand href="#" className="text-info">
            COPMENT!!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Form className="d-flex w-50">
              <Button
                onClick={() => handleClick()}
                variant="warning w-75"
                style={{
                  color: `#000`,
                  fontWeight: `bold`,
                  fontSize: 15,
                  letterSpacing: 1,
                }}
              >
                Add more
              </Button>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 mx-2"
                aria-label="Search"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AddFileModal show={show} setShow={setShow} />
    </>
  );
}

export default NavScrollExample;
