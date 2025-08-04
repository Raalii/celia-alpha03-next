import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppStudentSidebar } from "./StudentSidebar";
import RightColumn from "./components/RightColumn";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppStudentSidebar />
      <main className="flex-1">
        <SidebarTrigger /> {/* petit burger auto mobile */}
        {children}
      </main>
      <aside className="hidden border-l bg-white/80 px-6 py-8 shadow-sm backdrop-blur lg:block dark:bg-zinc-900/60">
        {/*  you’ll render <RightColumn /> from inside each page  */}
        <RightColumn />
      </aside>
    </SidebarProvider>
  );
}
