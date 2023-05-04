import classNames from "classnames";
import React, { PropsWithChildren, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { useRedux } from "../../redux";


export const Login = (props: PropsWithChildren) => {
  const { dispatch, useSelector } = useRedux();
  const [collapsed, setSidebarCollapsed] = useState(false);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      Hello, World
    </div>
  );
};