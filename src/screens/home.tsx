import React, { useEffect, useState } from "react";
import LectureDemoCard from "../components/lectureDemoCard";
import NavScrollExample from "../components/navbar";
import useFile from "../hooks/file_hook";

export default function Home() {
  const [files, setFiles] = useState<any>([]);
  const data = useFile();

  useEffect(() => {
    setFiles(data);
  }, [data]);

  console.log(files);
  return (
    <>
      <NavScrollExample />
      <div
        className="container mb-3 d-flex flex-wrap"
        style={{ marginTop: "70px" }}
      >
        {files ? (
          files.length ? (
            files.map((item: any, ind: number) => (
              <div className="m-3" key={ind}>
                <LectureDemoCard data={item} />
              </div>
            ))
          ) : (
            <div className="container mb-3 d-flex flex-wrap">
              <h1>No Data Available...</h1>
            </div>
          )
        ) : (
          <div className="container mb-3 d-flex flex-wrap">
            <h1>Loadin...</h1>
          </div>
        )}
      </div>
    </>
  );
}
