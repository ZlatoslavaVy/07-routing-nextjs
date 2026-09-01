import type { Note } from "@/types/note";
import css from "./NotePreview.module.css"; // Імпортуємо твої стилі

type Props = {
  note: Note;
};

export default function NoteDetails({ note }: Props) {
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          {note.tag && <span className={css.tag}>{note.tag}</span>}
        </div>
        
        <p className={css.content}>{note.content}</p>
        
        {note.date && (
          <span className={css.date}>
            {new Date(note.date).toLocaleDateString()}
          </span>
        )}
      </div>
    </div>
  );
}