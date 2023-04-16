import classNames from "classnames";
import React, { PropsWithChildren, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Layout = (props: PropsWithChildren) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  return (
    <div
      className={classNames({
        "grid min-h-screen": true,
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
      >
        {/* sidebar */}
        <div className="bg-indigo-700 text-white">
          <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
            <Bars3Icon className="w-10 h-10" />
          </button>
        </div>
        {/* content */}
        <div className=""> {props.children}</div>
      </div>
  );
};
export default Layout;