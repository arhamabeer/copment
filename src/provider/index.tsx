import FileProvider from "./fileProvider";
import RoomProvider from "./roomProvider";

export default function Provider({ children }: any) {
  return (
    <>
      <RoomProvider>
        <FileProvider>{children}</FileProvider>
      </RoomProvider>
    </>
  );
}
