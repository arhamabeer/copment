import { useContext } from "react";
import FileContext from "../context/FileContext";

export default function useFile() {
  return useContext(FileContext);
}
