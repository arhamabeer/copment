import axios from "axios";
import React from "react";
import RoomContext from "../context/RoomContext";

interface Room {
  password: string;
  email: string;
}
const API = axios.create({
  baseURL: "http://localhost:5000/",
  headers: { Accept: "Application/json" },
});

export default function RoomProvider({ children }: any) {
  //   const [room, setRoom] = React.useState<Room | null>(null);

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

    console.log(response);
  };

  return (
    <RoomContext.Provider value={{ saveRoom, enterRoom }}>
      {children}
    </RoomContext.Provider>
  );
}
