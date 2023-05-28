import React, { useState } from "react";
import Pending from "./Pending";
import Uploaded from "./Uploaded";
import ImageForm from "./ImageForm";

export const EditModal = ({handleHideModal}) => {
  const [isPending, setIsPending] = useState(false);
  const [image, setImage] = useState();
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative my-6 w-[350px]">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">
              Изменить профиль
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative flex-auto">
          {error ? <p className='text-red-600 text-center border-red-600 rounded-lg border-2 bg-red-300 px-4 py-2'>Ошибка на стороне сервера, Обновите страницу и попробуйте еще раз</p> :
                isPending ? <Pending /> : image && url ? <Uploaded image={image} /> : <ImageForm image={image} setImage={setImage} setIsPending={setIsPending} setError={setError} />}

            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <input type="text" placeholder="Никнейм" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10" />
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <i className="fas fa-user"></i>
              </span>
            </div>
            
            {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
              I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception
              of themselves! They're slowed down by their perception of
              themselves. If you're taught you can’t do anything, you
              won’t do anything. I was taught I could do everything.
            </p> */}
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              onClick={() => handleHideModal()}
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            // onClick={() => setShowModal(false)}
            >
              Отмена
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            // onClick={() => setShowModal(false)}
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

