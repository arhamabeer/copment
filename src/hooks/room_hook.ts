import { useContext } from "react";
import RoomContext from "../context/RoomContext";

export default function useRoom() {
  return useContext(RoomContext);
}
