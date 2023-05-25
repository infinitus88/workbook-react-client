import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
export const defaultNavItems: NavItem[] = [
  {
    label: "Титульный лист",
    href: "#title",
    icon: null,
  },
  {
    label: "Пояснительная записка",
    href: "#readme",
    icon: null,
  },
  {
    label: "Тема 1.1. Основные понятия и аксиомы статики",
    href: "#topic1_1",
    icon: null,
  },
  {
    label: "Тема 1.2. Плоская система сходящихся сил",
    href: "#topic1_2",
    icon: null,
  },
  {
    label: "Тема 1.3. Пара сил и момент силы относительно точки",
    href: "#topic1_3",
    icon: null,
  },
  {
    label: "Тема 1.4. Плоская система произвольно расположенных сил",
    href: "#topic1_4",
    icon: null,
  },
  
];