import React, { useRef } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import Image from 'next/image';
import { defaultNavItems, NavItem } from './defaultNavItems';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

import { useRedux } from '../../redux';
import { signOut } from 'next-auth/react';
import { useSession } from "next-auth/react";
import { setShowGuide } from '../../redux/user/userSlice';

// import { HashLink } from 'react-router-hash-link';

// add NavItem prop to component prop
type Props = {
  collapsed: boolean;
  navItems?: NavItem[];
  setCollapsed(collapsed: boolean): void;
  shown: boolean;
};
const Sidebar = ({
  collapsed,
  navItems = defaultNavItems,
  shown,
  setCollapsed,
}: Props) => {

  // dispatch используем для изменения значения showGuid в redux'е, 
  // а useSelector используем что бы получить данные пользователя
  const {dispatch, useSelector} = useRedux();

  // Берем данные пользователя из redux'а
  const userData = useSelector((state) => state.user.userData);

  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  return (
    <div
      className={classNames({
        'overflow-y-auto h-auto sticky top-0 md:h-screen bg-indigo-700 text-zinc-50 md:sticky md:translate-x-0 z-20': true,
        'transition-all duration-300': true,
        'w-[300px] ': !collapsed,
        'w-16': collapsed,
        '-translate-x-full': !shown,
      })}
    >
      <div
        className={classNames({
          'flex flex-col justify-between inset-0': true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={classNames({
            'flex items-center border-b border-b-indigo-800 transition-none': true,
            'p-4 justify-between': !collapsed,
            'py-4 justify-center': collapsed,
          })}
        >
          {!collapsed && <Link className="whitespace-nowrap" href={'/'}>Рабочая тетрадь</Link>}
          <button
            className="grid place-content-center hover:bg-indigo-800 w-10 h-10 rounded-full opacity-0 md:opacity-100"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>
        <div
          className={classNames({
            'grid place-content-stretch p-4 ': true,
          })}
        >
          <div className="flex gap-4 items-center h-15 overflow-hidden">
            <Image
              src={userData ? userData.profileImage : "https://via.placeholder.com/150"}
              height={36}
              width={36}
              alt="profile image"
              className="rounded-full"
            />
            {!collapsed && (
              <div className="flex flex-col ">
                <span className="text-indigo-50 my-0">{userData ? userData.email : 'Загрузка...'}</span>
                <Link href="/profile/details" className="text-indigo-200 text-sm">
                  Посмотреть профиль
                </Link>
                <Link onClick={() => dispatch(setShowGuide(true))} href="" className="text-indigo-200 text-sm">
                  Инструкция по распечатке
                </Link>
                <div onClick={() => signOut()} className="text-red-200 text-sm cursor-pointer">
                  Выйти
                </div>
              </div>
            )}
          </div>
        </div>
        <nav className="flex-grow">
          <ul
            className={classNames({
              'my-2 flex flex-col gap-2 items-stretch': true,
            })}
          >
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    'text-indigo-100 hover:bg-indigo-900 flex': true, //colors
                    'transition-colors duration-300': true, //animation
                    'rounded-md p-2 mx-3 gap-4 ': !collapsed,
                    'rounded-full p-2 mx-3 w-10 h-10': collapsed,
                  })}
                >
                  <Link href={item.href} scroll={false} className="flex gap-2">
                    {item.icon} <span>{!collapsed && item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
      </div>
    </div>
  );
};
export default Sidebar;
