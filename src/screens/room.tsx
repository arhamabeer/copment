import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Room() {
  return (
    <>
      <Form
        className="container d-flex justify-content-center align-items-center flex-column"
        style={{ height: "96vh" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="number" placeholder="Room ID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Enter
        </Button>
      </Form>
    </>
  );
}

export default Room;
