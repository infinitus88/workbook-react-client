import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import React, { FormEventHandler, useState } from 'react';
import { forgetPassword } from '../../redux/auth/authSlice';
import { useAppDispatch, useRedux } from '../../redux';

const Forget: NextPage = (props): JSX.Element => {
  const [userEmail, setUserEmail] = useState("");
  const { dispatch, useSelector } = useRedux();

  const verifCode = useSelector(state => state.auth.verifCode);
  console.log(verifCode);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // dispatch(forgetPassword({ email: userEmail }));

    console.log()
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Восстановление пароля
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
              value={userEmail}
              onChange={({ target }) =>
                setUserEmail(target.value)
              }
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <input type="submit" value="Востановить" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forget;