import axios from "axios";
import React from "react";
import FileContext from "../context/FileContext";
import { File } from "../types/fileType";

const API = axios.create({
  baseURL: "http://localhost:5000/",
  headers: { Accept: "Application/json" },
});

export default function FileProvider({ children }: any) {
  const [files, setFiles] = React.useState<File[]>([
    {
      _id: "6374ae3fa53bc071997453c1",
      author_id: "abc1",
      room_id: "abc1",
      room_number: 1,
      author_name: "abc1",
      author_email: "abc1",
      course_name: "abc11",
      content: "abc11",
      createdAt: "2022-11-16T09:32:47.911Z",
      updatedAt: "2022-11-16T09:32:47.911Z",
      __v: 0,
    },
    {
      _id: "6374afbae1e362a83a070cb8",
      author_id: "abc1",
      room_id: "abc1",
      room_number: 1,
      author_name: "abc1",
      author_email: "abc1@email.com",
      course_name: "abc11",
      content: "abc11",
      createdAt: "2022-11-16T09:39:06.364Z",
      updatedAt: "2022-11-16T09:39:06.364Z",
      __v: 0,
    },
  ]);

  React.useEffect(() => {
    (async () => {
      const response = await API("/getFile");
      console.log(response);
    })();
  }, []);

  return <FileContext.Provider value={files}>{children}</FileContext.Provider>;
}
