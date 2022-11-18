import FileProvider from "./fileProvider";
import RoomProvider from "./roomProvider";

export default function Provider({ children }: any) {
  return (
    <>
      <FileProvider>
        <RoomProvider>{children}</RoomProvider>
      </FileProvider>
    </>
  );
}
