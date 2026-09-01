import Modal from '@/components/Modal/Modal';
import { fetchNoteById } from '@/lib/api/notes';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NotePreview({ params }: Props) {
  const { id } = await params;
  
  // Отримуємо дані конкретної нотатки за її id з API
  const note = await fetchNoteById(id);

  if (!note) {
    return null; // або можна повернути повідомлення про помилку
  }

  return (
    <Modal>
      {/* Виводимо деталі нотатки. Залежно від того, які ще поля є в об'єкті Note (дати, теги), можеш додати їх сюди */}
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
}