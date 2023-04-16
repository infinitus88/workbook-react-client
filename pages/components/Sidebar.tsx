import React from "react";
import cn from "classnames";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon
} from "@heroicons/react/24/outline";

type Props = {
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
};

const Sidebar = ({ collapsed, setCollapsed }: Props) => {
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  return (
    <div
      className={cn({
        "bg-indigo-700 text-zinc-50 z-20": true,
      })}
    >
      <div
        className={cn({
          "flex flex-col justify-between": true
        })}
      >

      </div>
    </div>
  )
}