import { fetchNotes } from "@/lib/api/notes";
import NoteList from "@/components/NoteList/NoteList";
import NotesPage from "@/components/NotesPage/NotesPage";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function FilteredNotesPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Отримуємо тег із масиву catch-all маршруту або ставимо 'all' за замовчуванням
  const tagParam = slug?.[0] || "all";
  
  // Якщо вибрано 'all', передаємо undefined, щоб бекенд не отримував зайвий параметр
  const tag = tagParam.toLowerCase() === "all" ? undefined : tagParam;

  const data = await fetchNotes({ tag });

  return (
    <NotesPage>
      <NoteList notes={data.notes} />
    </NotesPage>
  );
}