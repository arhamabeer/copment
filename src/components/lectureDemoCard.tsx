import Button from "react-bootstrap/Button";

export default function LectureDemoCard() {
  return (
    <div className="card" style={{ width: "18rem", cursor: "pointer" }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button variant="success">Open</Button>
      </div>
    </div>
  );
}
