import { createContext } from "react";
import { File } from "../types/fileType";

const FileContext = createContext<File[]>([]);

export default FileContext;
