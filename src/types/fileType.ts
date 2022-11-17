export type File = {
  _id: string;
  author_name: string;
  author_email: string;
  author_id: string;
  course_name: string;
  content: string;
  room_id: string;
  room_number: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export type AddFile = {
  author_name?: string;
  author_email?: string;
  course_name?: string;
  content?: Blob;
};
