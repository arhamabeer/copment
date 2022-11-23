import axios from "axios";
import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import RoomContext from "../context/RoomContext";
import { LoginCredential } from "../types/fileType";
// import { useHistory } from "react-router-dom";

interface Room {
  password: string;
  email: string;
}

const dev = true;

const SERVER = dev
  ? "https://aaa-copment-server.herokuapp.com/"
  : "http://localhost:5000/";

const API = axios.create({
  baseURL: SERVER,
  headers: { Accept: "Application/json" },
});

export default function RoomProvider({ children }: any) {
  const [loginCred, setLoginCred] = React.useState<LoginCredential | null>(
    null
  );

  // const token = useMemo(() => {
  //   return localStorage.getItem(`_tkn_room_user_credential`);
  // }, [loginCred]);

  // useEffect(() => {
  //   if(token){
  //     const response = await API("/verifyToken", {
  //       method: "post",
  //     });
  //   }
  // }, [token]);
  const navigate = useNavigate();
  const saveRoom = async (data: Room) => {
    const response = await API("/saveRoom", {
      method: "post",
      data: data,
    });
    console.log(response);
  };
  const enterRoom = async (data: Room | any) => {
    const response = await API("/enterRoom", {
      method: "post",
      data: data,
    });

    const { token, result } = response.data;
    const room_id = data.room_id || ``;
    localStorage.setItem("_tkn_room_user_credential", response.data.token);
    setLoginCred({ token, result, room_id });
    if (response.data.result) {
      navigate("/");
    }
  };

  return (
    <RoomContext.Provider value={{ saveRoom, enterRoom, loginCred }}>
      {children}
    </RoomContext.Provider>
  );
}
