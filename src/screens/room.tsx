import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CreateRoomModal from "../components/createRoomModal";

interface Data {
  author_email: string;
  password: string;
  room_code: string;
  room_id: string;
}

function Room() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState<Data>({
    author_email: "",
    password: "",
    room_id: "",
    room_code: "",
  });
  return (
    <>
      <Form
        className="container d-flex justify-content-center align-items-center flex-column"
        style={{ height: "96vh" }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            onChange={(e) => {
              setData((f) => ({ ...f, author_email: e.target.value }));
            }}
            placeholder="Your Email"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onChange={(e) => {
              setData((f) => ({ ...f, password: e.target.value }));
            }}
            type="password"
            placeholder="Password"
          />{" "}
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => {
              setData((f) => ({ ...f, room_id: e.target.value }));
            }}
            type="text"
            placeholder="Room ID"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onChange={(e) => {
              setData((f) => ({ ...f, room_code: e.target.value }));
            }}
            type="password"
            placeholder="Room Code"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Enter
        </Button>
        <Button
          variant="success"
          onClick={() => setShow(true)}
          className="mt-2"
          type="button"
        >
          Create new room
        </Button>
      </Form>
      <CreateRoomModal show={show} setShow={setShow} />
    </>
  );
}

export default Room;
