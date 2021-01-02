export interface Note {
  id: string;
  title: string;
  date: Date;
  tags: string[];
  content: string;
  deleted?: boolean;
}

export type CreateNote = Pick<Note, "title" | "date" | "tags" | "content">;
