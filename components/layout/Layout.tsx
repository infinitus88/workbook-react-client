import classNames from "classnames";
import React, { PropsWithChildren, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


const Layout = (props: PropsWithChildren) => {
  // Хук который принимает истинное значени если сайдбар закрыт
  const [collapsed, setSidebarCollapsed] = useState(false);

  // Хук который принимает истинное значение если сайдбар скрыт
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div
      className={classNames({
        "grid bg-white-100": true,
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
    >
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setSidebarCollapsed}
        shown={showSidebar}
      />
      <div className="">
        <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
