import {
  Bell,
  BookOpen,
  Calendar,
  LayoutDashboard,
  PencilLine,
  Settings,
  User,
} from "lucide-react";

export const studentNav = [
  { title: "Dashboard", href: "/student", icon: LayoutDashboard },
  { title: "Mentor", href: "/student/mentor", icon: User },
  { title: "Mes cours", href: "/student/courses", icon: BookOpen },
  { title: "Calendrier", href: "/student/calendar", icon: Calendar },
  { title: "Notifications", href: "/student/notifications", icon: Bell },
  { title: "Paramètres", href: "/student/settings", icon: Settings },
  { title: "Exercices", href: "/student/exercises", icon: PencilLine },
];
