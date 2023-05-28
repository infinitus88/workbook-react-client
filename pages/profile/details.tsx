import { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEventHandler, useState } from 'react';
import {EditModal} from '../../components/edit/EditModal';

const SignIn: NextPage = (props): JSX.Element => {
  const router = useRouter();
  const session = useSession();
  const [userCreds, setUserCreds] = useState({ email: "", password: "" });
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: userCreds.email,
      password: userCreds.password,
      redirect: false,
      callbackUrl: "/",
    }).then(res => {
      if (res?.ok) {
        router.push("/");
      } else {
        setErrorMessage("Неверный пароль");
      }
    });
  };

  const handleShowEdit = () => {
    setShowModal(true);
    // if (session.data)
    //   setShowModal(true);
  };

  const handleHideEdit = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-indigo-800 max-w-4xl mx-auto shadow overflow-hidden sm:rounded-lg">
      {/* {showModal && (
        <EditModal />
      )} */}
      {showModal ? <EditModal handleHideModal={handleHideEdit} /> : null}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 place-items-center h-30 px-4 py-5 sm:px-6">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
          className="w-32 rounded-lg shadow-lg"
          alt="Avatar" 
        />
        <div>
          <h3 className="text-lg leading-6 font-medium text-indigo-50">
            Профиль пользователя
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-indigo-50">
            Детали и информация о пользователе
          </p>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleShowEdit()}>
            Редактировать
          </button>
        </div>
        
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Никнейм
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {session.data ? session.data?.user.username : 'Загрузка...'}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Почта
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {session.data ? session.data?.user.email : 'Загрузка...'}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Salary
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              $10,000
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              About
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default SignIn;