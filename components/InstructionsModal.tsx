import React, { useState } from "react";

export const InstructionsModal = ({handleHideModal}) => {
  const [isPending, setIsPending] = useState(false);

  return (
    <div
      className="background-modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative my-6 w-[500px]">
        {/*content*/}
        <div className="border-1 border-black rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">
              Обезательно для прочтения
            </h3>
          </div>
          {/*body*/}
          <div className="p-3 my-5  text-xl text-justify leading-loose">
          После того вы заполните рабочую тетрадь нужно нажать CTRL + P и снизу нажать на Печать.
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            onClick={() => handleHideModal()}
            >
              Ок
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

