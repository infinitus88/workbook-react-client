import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";

const TextArea = () => {
  return (
    <textarea className="
      shadow 
      appearance-none 
      border rounded 
      w-full py-2 px-3 
      text-gray-700 
      leading-tight 
      focus:outline-none 
      focus:shadow-outline" />
  );
};

export default TextArea;