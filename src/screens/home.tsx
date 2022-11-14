import React from "react";
import LectureDemoCard from "../components/lectureDemoCard";
import NavScrollExample from "../components/navbar";

export default function Home() {
  return (
    <>
      <NavScrollExample />
      <div
        className="container mb-3 d-flex flex-wrap"
        style={{ marginTop: "70px" }}
      >
        {[1, 3, 4, 4, 5, 5, 5, 5, 55, 55, 4].map((item, ind) => (
          <div className="m-3">
            <LectureDemoCard />
          </div>
        ))}
      </div>
    </>
  );
}
