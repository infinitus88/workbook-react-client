import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEventHandler, useState } from 'react';

const Register: NextPage = (props): JSX.Element => {
  const router = useRouter();
  const [userCreds, setUserCreds] = useState({ email: "", password: "", passwordVerif: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // const result = await signIn("credentials", {
    //   email: userCreds.email,
    //   password: userCreds.password,
    //   redirect: false,
    //   callbackUrl: "/",
    // }).then(res => {
    //   if (res?.ok) {
    //     router.push("/");
    //   } else {
    //     setErrorMessage("Неверный пароль");
    //   }
    // });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Создать нового пользователя
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Е-почта
            </label>
            <input
              value={userCreds.email}
              onChange={({ target }) =>
                setUserCreds({ ...userCreds, email: target.value })
              }
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Пароль
            </label>
            <input
              value={userCreds.password}
              onChange={({ target }) =>
                setUserCreds({ ...userCreds, password: target.value })
              }
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Подтвердите пароль
            </label>
            <input
              value={userCreds.password}
              onChange={({ target }) =>
                setUserCreds({ ...userCreds, password: target.value })
              }
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="block text-center font-semibold text-red-800">{errorMessage}</div>
          <div className="mt-6">
            <input type="submit" value="Зарегистрироваться" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;