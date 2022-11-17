import React, { useEffect, useState } from "react";
import LectureDemoCard from "../components/lectureDemoCard";
import NavScrollExample from "../components/navbar";
import useFile from "../hooks/file_hook";
import { File } from "../types/fileType";

export default function Home() {
  const [files, setFiles] = useState<File[] | null>(null);
  const data = useFile();

  useEffect(() => {
    setFiles(data);
  }, [data]);

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
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    </>
  );
}
