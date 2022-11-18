import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CreateRoomModal from "../components/createRoomModal";
import useRoom from "../hooks/room_hook";

interface Data {
  room_code: string;
  room_id: string;
}

function Room() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState<Data>({
    room_id: "",
    room_code: "",
  });

  const { enterRoom } = useRoom();

  const handleEnter = () => {
    if (data.room_code === "" || data.room_id === "") {
      alert("Wrong Credentials");
    } else {
      enterRoom(data);
    }
  };
  return (
    <>
      <Form
        className="container d-flex justify-content-center align-items-center flex-column"
        style={{ height: "96vh" }}
      >
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
        <Button variant="primary" type="button" onClick={() => handleEnter()}>
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
