import React from "react";
import FileContext from "../context/FileContext";

export default function FileProvider({ children }: any) {
  const files = [1, 2, 3, 4, 5, 5];
  return <FileContext.Provider value={files}>{children}</FileContext.Provider>;
}
