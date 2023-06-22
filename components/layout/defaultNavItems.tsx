import React from "react";

// Т.к используется TypeScript перед создание массива 
// с данными, создадим тип для елементов массива
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

// Во время создания массива указываем Тип этого массива, 
// чтобы туда можно было добовлять только элементы с заранее предопределеными полями
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
    label: "Тема 1.1 Основные понятия и аксиомы статики",
    href: "#topic1_1",
    icon: null,
  },
  {
    label: "Тема 1.2 Плоская система сходящихся сил",
    href: "#topic1_2",
    icon: null,
  },
  {
    label: "Тема 1.3 Пара сил и момент силы относительно точки",
    href: "#topic1_3",
    icon: null,
  },
  {
    label: "Тема 1.4 Плоская система произвольно расположенных сил",
    href: "#topic1_4",
    icon: null,
  },
  {
    label: "Тема 1.5 Трение",
    href: "#topic1_5",
    icon: null,
  },
  {
    label: "Тема 1.6 Пространственная система сил",
    href: "#topic1_6",
    icon: null,
  },
  {
    label: "Тема 1.7 Центр тяжести",
    href: "#topic1_7",
    icon: null,
  },
  {
    label: "Тема 1.8 Основные понятия кинематики",
    href: "#topic1_8",
    icon: null,
  },
  {
    label: "Тема 1.9 Кинематика точки",
    href: "#topic1_9",
    icon: null,
  },
  {
    label: "Тема 1.10  Простейшие движения твердого тела",
    href: "#topic1_10",
    icon: null,
  },
  {
    label: "Тема 1.11  Сложное движение",
    href: "#topic1_11",
    icon: null,
  },
  {
    label: "Тема 1.12  Основные понятия и аксиомы динамики",
    href: "#topic1_12",
    icon: null,
  },
  {
    label: "Тема 1.13 Движение материальной точки",
    href: "#topic1_13",
    icon: null,
  },
  {
    label: "Тема 1.14 Работа и мощность",
    href: "#topic1_14",
    icon: null,
  },
  {
    label: "Тема 1.15 Общие теоремы динамики ",
    href: "#topic1_15",
    icon: null,
  },
];