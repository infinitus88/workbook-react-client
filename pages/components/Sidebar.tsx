import React from "react";
import cn from "classnames";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import { defaultNavItems, NavItem } from "./defaultNavItems";


type Props = {
  collapsed: boolean;
  navItems?: NavItem[];
  setCollapsed(collapsed: boolean): void;
};

export const Sidebar = ({
   collapsed,
   navItems = defaultNavItems,
    setCollapsed 
  }: Props) => {

  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  return (
    <div
      className={cn({
        "bg-indigo-700 text-zinc-50 z-20": true,
      })}
    >
      <div
        className={cn({
          "flex flex-col justify-between": true,
          "h-full": true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={cn({
            "flex items-center border-b border-b-indigo-800": true,
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,
          })}
        >
          {!collapsed && <span className="whitespace-nowrap">My Logo</span>}
          <button
            className={cn({
              "grid place-content-center": true, // position
              "hover:bg-indigo-800 ": true, // colors
              "w-10 h-10 rounded-full": true, // shape
            })}
            // 👇 set the collapsed state on click
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>
        <div
          className={cn({
            "grid place-content-stretch p-4": true,
          })}
        >
          <div className="flex gap-4 items-center h-11 overflow-hidden">
            <Image
              src={"https://via.placeholder.com/150"}
              height={36}
              width={36}
              alt="profile image"
              className="rounded-full"
            />
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-indigo-50 my-0">Azamat Aldabergenov</span>
                <Link href="/" className="text-indigo-200 text-sm">
                  View Profile
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* nav items part */}
        <nav className="flex-grow">
          <ul
            className={cn({
              "my-2 flex flex-col gap-2 items-strech": true,
            })}
            >
              {navItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={cn({
                      "text-indigo-100 hover:bg-indigo-900 flex": true,
                      "transition-colors duration-300": true,
                      "rounded-md p-2 mx-3 gap-4 ": !collapsed,
                      "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                    })}
                  >
                    <Link href={item.href} className="flex gap-2">
                      {item.icon} <span>{!collapsed && item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
        </nav>

        {/* profile part ... omited for brevity */}
      </div>
    </div>
  );
};