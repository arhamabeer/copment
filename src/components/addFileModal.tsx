import { AnyAaaaRecord } from "dns";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useFile from "../hooks/file_hook";
import { AddFile } from "../types/fileType";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddFileModal({ show, setShow }: Props) {
  const handleClose = () => setShow(false);
  const [file, setFile] = useState<AddFile | null>({
    author_name: "",
    author_email: "",
    course_name: "",
    content: undefined,
  });

  const { saveRoom } = useFile();

  const handleUpload = () => {
    if (
      file?.author_name === "" ||
      file?.author_email === "" ||
      file?.content === undefined ||
      file?.course_name === ""
    ) {
      alert("All fields are mandatory");
    } else {
      setShow(false);
      saveRoom(file);
    }
  };
  // console.log(file);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload a new file</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setFile((f) => ({ ...f, author_name: e.target.value }));
                }}
                type="text"
                placeholder="name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => {
                  setFile((f) => ({ ...f, author_email: e.target.value }));
                }}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Course name</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setFile((f) => ({ ...f, course_name: e.target.value }));
                }}
                type="text"
                placeholder="course"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your File</Form.Label>
              <Form.Control
                type="file"
                autoFocus
                accept=".doc, .docx,.ppt, .pptx,.txt,.pdf"
                onChange={(e: any) => {
                  setFile((f) => ({ ...f, content: e.target.files[0] }));
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
