import { ReactNode } from "react";
import SidebarNotes from "@/components/SidebarNotes/SidebarNotes";
import css from "./LayoutNotes.module.css";

type Props = {
  children: ReactNode;
};

export default function LayoutNotes({ children }: Props) {
  return (
    <div className={css.container}>
      {/* Ліва колонка: сайдбар із фільтрами/тегами */}
      <aside className={css.sidebar}>
        <SidebarNotes />
      </aside>

      {/* Права колонка: основний контент (список нотаток + модалка) */}
      <div className={css.notesWrapper}>
        {children}
      </div>
    </div>
  );
}