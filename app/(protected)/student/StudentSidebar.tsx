// components/app-student-sidebar.tsx
"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { studentNav } from "@/lib/navigation/nav";
import { cn } from "@/lib/utils"; // utilitaire shadcn pour concat de classes
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppStudentSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar
      className="flex h-screen w-64 flex-col  text-[#333]"
      /* on enlève le border par défaut */
      style={{ border: "none" }}
    >
      {/* ---------- Header ---------- */}
      <SidebarHeader className="flex bg-[color:var(--blue-100)] flex-row justify-center items-end gap-2 py-10">
        <img
          src="/img/celia_logo.png"
          alt="Celia"
          width={64}
          height={64}
          className="dark:hidden"
        />
        <img
          src="/img/celia_logo_dark.png"
          alt="Celia"
          width={64}
          height={64}
          className="hidden dark:block"
        />
        <span className="font-comfortaa relative bottom-2 text-3xl font-semibold text-[#333]">
          Celia.ai
        </span>
      </SidebarHeader>

      {/* ---------- Menu ---------- */}
      <SidebarContent className="px-4 bg-[color:var(--blue-100)]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4">
              {studentNav.map(({ title, href, icon: Icon }) => {
                const active = pathname === href;
                return (
                  <SidebarMenuItem key={href}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "flex w-full items-center gap-3 rounded-full px-4 py-4.5 font-medium",
                        "transition-colors duration-150",
                        active
                          ? "bg-[#333] text-white"
                          : "text-[#333] hover:bg-white"
                      )}
                    >
                      <Link href={href}>
                        <Icon
                          size={22}
                          className={
                            active
                              ? "stroke-[2] text-[color:var(--blue-500)]"
                              : ""
                          }
                        />
                        <span className="flex-1 text-[1rem] font-normal text-left">
                          {title}
                        </span>

                        {/* badge rouge maquette pour Notifications */}
                        {title === "Notifications" && (
                          <span className="ml-auto h-2 w-2 rounded-full bg-red-500" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* ---------- Footer (logout) ---------- */}
      <SidebarFooter className="bg-[color:var(--blue-100)] mt-auto flex flex-col items-center gap-3 py-8">
        <button
          onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
          className="flex items-center gap-2 text-sm font-medium text-red-600"
        >
          <i className="lucide lucide-log-out" />
          Déconnexion
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
