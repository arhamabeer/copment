import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function LectureDemoCard() {
  return (
    <div
      className="card"
      style={{
        width: "20rem",
        cursor: "pointer",
        backgroundColor: "#363431",
        boxShadow: "0px 0px 16px grey",
      }}
    >
      <div className="card-body">
        <h5 className="card-title text-light">Card title</h5>
        <h6 className="card-subtitle mb-2 text-info ">Card subtitle</h6>
        <p className="card-text text-light">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="d-flex justify-content-between px-2 mb-3">
          <Button variant="success">Open</Button>
          <Button variant="danger">Delete</Button>
        </div>
        <Card.Footer className="text-warning">2 days ago</Card.Footer>
      </div>
    </div>
  );
}
