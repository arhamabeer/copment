import { createContext } from "react";

interface Room {
  password: string;
  email: string;
}

const RoomContext = createContext<Room | any>([]);

export default RoomContext;
