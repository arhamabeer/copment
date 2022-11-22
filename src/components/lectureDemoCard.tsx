import moment from "moment";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useMemo } from "react";

export default function LectureDemoCard({ data }: any) {
  const { course_name, author_name, content, updatedAt } = data;

  const formatted_date = useMemo(() => {
    if (moment(updatedAt).startOf("hour").fromNow().split(" ")[0] >= `24`) {
      return moment(updatedAt).startOf("day").fromNow();
    } else {
      return moment(updatedAt).startOf("hour").fromNow();
    }
  }, data);
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
        <h5 className="card-title text-light">{course_name}</h5>
        <h6 className="card-subtitle mb-2 text-info ">{author_name}</h6>
        <p className="card-text text-light">
          {content.fieldname + ` / ` + content.originalname}
        </p>
        <div className="d-flex justify-content-between px-2 mb-3">
          <Button variant="success">Open</Button>
          <Button variant="danger">Delete</Button>
        </div>
        <Card.Footer className="text-warning">{formatted_date}</Card.Footer>
      </div>
    </div>
  );
}
