import { fetchNotes } from '@/lib/api/notes'; // функція API
import NoteList from '@/components/NoteList/NoteList';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function FilteredNotesPage({ params }: Props) {
  const { slug } = await params;
  
  // Якщо вибрано 'all', передаємо undefined (або нічого) у функцію запиту
  const currentTag = slug[0] === 'all' ? undefined : slug[0];
  
  // Зверни увагу: переконайся, що твоя функція getNotes приймає tag як параметр 
  // і передає його в axios params
  const response = await fetchNotes({tag: currentTag}); 

  return (
    <div>
      {response.notes.length > 0 ? (
        <NoteList notes={response.notes} />
      ) : (
        <p>No notes found for this tag.</p>
      )}
    </div>
  );
}