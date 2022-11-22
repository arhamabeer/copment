export type File = {
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
  author_name?: string | any;
  author_email?: string | any;
  course_name?: string | any;
  content?: Blob;
};

export type LoginCredential = {
  token: string;
  result: string;
  room_id: string;
};
