import { AnyAaaaRecord } from "dns";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useRoom from "../hooks/room_hook";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Data {
  author_email: string;
  password: string;
}

export default function CreateRoomModal({ show, setShow }: Props) {
  const handleClose = () => setShow(false);
  const [data, setData] = useState<Data>({
    author_email: "",
    password: "",
  });

  const { saveRoom } = useRoom();

  const handleCreate = () => {
    if (data.password.length < 5 || data.author_email === "") {
      alert("Password must contain atleast 6 characters or invalid email");
    } else {
      saveRoom(data);
      setShow(false);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload a new file</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => {
                  setData((f) => ({ ...f, author_email: e.target.value }));
                }}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Room password</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setData((d) => ({ ...d, password: e.target.value }));
                }}
                type="password"
                placeholder="password"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreate}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
