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

  const styles = {
    textAlign: "center"
  };

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
      <div className="">
         {/* {props.children} */}
         <h1 className="flex items-center justify-center">Рабочая тетрадь</h1>
          <p className="flex items-center justify-center">Глава 1</p>

          <p className="flex items-center justify-center">&nbsp;</p>

          <p>May 9, 2021&nbsp;&mdash;&nbsp;I&#39;ve worked a bit with React using JS, but now I&#39;m creating a new project to learn React with&nbsp;<em>Typescript</em>. When I was using JS and needed to&nbsp;<em>use</em>&nbsp;...</p>

          <p><a href="https://stackoverflow.com/a/67471906">1 answer</a>&nbsp;&middot;&nbsp;Top answer:&nbsp;You aren&#39;t required to do this, but it&#39;s a nice convenience factor, and can prevent some errors later. Normally, you&#39;d have to do this in every component ...</p>

          <p><a href="https://stackoverflow.com/questions/71615709/advantages-of-useappdispatch-how-to-use-useappdispatch">Advantages of&nbsp;<em>useAppDispatch</em>&nbsp;/ How to&nbsp;<em>use</em>&nbsp;... - Stack Overflow</a></p>

          <p>Mar 25, 2022</p>

          <p><a href="https://stackoverflow.com/questions/75610077/how-to-set-the-type-for-useappdispatch-when-passed-as-props-from-a-nx-app-to-a-n">reactjs - How to set the type for&nbsp;<em>useAppDispatch</em>&nbsp;when passed ...</a></p>

          <p>Mar 1, 2023</p>

          <p><a href="https://stackoverflow.com/questions/67059061/getting-argument-of-type-asyncthunkaction-is-not-assignable-to-parameter-of">Getting &quot;Argument of type &#39;AsyncThunkAction&lt;*&gt; is not ...</a></p>

          <p>Apr 12, 2021</p>

          <p><a href="https://stackoverflow.com/questions/70711795/missing-return-type-on-function-useappdispatch">Missing return type on function&nbsp;<em>useAppDispatch</em>&nbsp;- Stack Overflow</a></p>

          <p>Jan 14, 2022</p>

          <p><a href="https://www.google.com/search?q=useAppDispatch+typescript+usage+site:stackoverflow.com&amp;sxsrf=APwXEdeFNzN2pVLmlM36DVnvnixzrAp7sg:1684068285193&amp;sa=X&amp;ved=2ahUKEwjn7qmf6_T-AhU3SPEDHfKFCiEQrQIoBHoECBQQBQ">More results from stackoverflow.com</a></p>
      </div>
    </div>
  );
};