import classNames from "classnames";
import React, { PropsWithChildren, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { useRedux } from "../../redux";
import { useSession } from "next-auth/react";


export const Layout = (props: PropsWithChildren) => {
  const { dispatch, useSelector } = useRedux();
  const [collapsed, setSidebarCollapsed] = useState(false);
  const session = useSession();
  console.log(session);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div
    className={classNames({
      // use grid layout
      "grid min-h-screen": true,
      // toggle the width of the sidebar depending on the state
      "grid-cols-sidebar": !collapsed,
      "grid-cols-sidebar-collapsed": collapsed,
      // transition animation classes
      "transition-[grid-template-columns] duration-300 ease-in-out": true,
    })}
    >
      {/* sidebar */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
      />
      {/* content */}
      <div className=""> {props.children}</div>
    </div>
  );
};