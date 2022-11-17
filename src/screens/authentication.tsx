// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import CreateRoomModal from "../components/createRoomModal";

// interface Data {
//   author_email: string;
//   password: string;

// }

// function Authentication() {
//   const [show, setShow] = useState(false);
//   const [data, setData] = useState<Data>({
//     author_email: "",
//     password: "",

//   });
//   return (
//     <>
//       <Form
//         className="container d-flex justify-content-center align-items-center flex-column"
//         style={{ height: "96vh" }}
//       >
//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//           <Form.Control
//             type="email"
//             onChange={(e) => {
//               setData((f) => ({ ...f, author_email: e.target.value }));
//             }}
//             placeholder="Your Email"
//             autoFocus
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Control
//             onChange={(e) => {
//               setData((f) => ({ ...f, password: e.target.value }));
//             }}
//             type="password"
//             placeholder="Password"
//           />{" "}
//         </Form.Group>{" "}

//         <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
//         <Button variant="primary" type="submit">
//           Enter
//         </Button>

//       <CreateRoomModal show={show} setShow={setShow} />
//     </>
//   );
// }

// export default Authentication;
