import Link from 'next/link';
import css from './SidebarNotes.module.css'; 
// Бекенд не повертає список тегів, тому описуємо їх безпосередньо в коді
const TAGS = ['Work', 'Personal', 'Idea', 'Urgent'];

export default function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      {/* Статичне посилання для всіх нотаток */}
      <li className={css.menuItem}>
        <Link href="/notes/filter/all" className={css.menuLink}>
          All notes
        </Link>
      </li>
      
      {/* Динамічний рендер списку тегів */}
      {TAGS.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}