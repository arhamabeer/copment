import axios from "axios";
import React from "react";
import FileContext from "../context/FileContext";
import { File } from "../types/fileType";

const dev = true;

const SERVER = dev
  ? "https://aaa-copment-server.herokuapp.com/"
  : "http://localhost:5000/";
const API = axios.create({
  baseURL: SERVER,
  headers: { Accept: "Application/json" },
});
const token = localStorage.getItem(`_tkn_room_user_credential`);

export default function FileProvider({ children }: any) {
  const [files, setFiles] = React.useState<File[] | null>([]);

  const fetchFiles = async () => {
    const room_id = `1vh754yg9p`;
    const response = await API(`/getFile/${room_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setFiles(response.data.result);
  };

  React.useEffect(() => {
    if (!token) return;
    fetchFiles();
  }, [token]);

  const saveFile = async (data: any, file: any) => {
    const formData = new FormData();
    const room_id = `1vh754yg9p`;
    formData.append("content", file as any);
    formData.append("author_name", data?.author_name);
    formData.append("author_email", data?.author_email);
    formData.append("course_name", data?.course_name);
    formData.append("room_id", room_id);

    API("/saveFile", {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      method: "post",
      data: formData,
    }).then(() => {
      fetchFiles();
    });
  };

  const handleDownloadDoc = () => {
    return SERVER;
  };

  return (
    <FileContext.Provider value={{ files, saveFile, handleDownloadDoc }}>
      {children}
    </FileContext.Provider>
  );
}
