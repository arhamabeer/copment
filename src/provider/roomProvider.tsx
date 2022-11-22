import axios from "axios";
import React from "react";
import RoomContext from "../context/RoomContext";
import { LoginCredential } from "../types/fileType";

interface Room {
  password: string;
  email: string;
}
const API = axios.create({
  baseURL: "http://localhost:5000/",
  headers: { Accept: "Application/json" },
});

export default function RoomProvider({ children }: any) {
  // const [room, setRoom] = React.useState<Room | null>(null);
  const [loginCred, setLoginCred] = React.useState<LoginCredential | null>(
    null
  );

  React.useEffect(() => {
    (async () => {
      // const response = await API("/getFile");
      // console.log(response);
    })();
  }, []);

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
  };

  return (
    <RoomContext.Provider value={{ saveRoom, enterRoom }}>
      {children}
    </RoomContext.Provider>
  );
}
