"use client";

import { useEffect } from "react";
import { BsCheckCircleFill as CheckIcon } from "react-icons/bs";

interface ToasterProps {
  isShown: boolean;
  onClose: () => void;
  message: string;
}

const Toaster = ({ isShown, onClose, message }: ToasterProps) => {
  useEffect(() => {
    if (isShown) {
      const tick = setTimeout(() => {
        onClose();
      }, 1000);

      return () => {
        return clearTimeout(tick);
      };
    }
  }, [isShown, onClose]);

  return (
    <>
      <div
        className={`
        px-4 py-2
        bg-white
        border-2 border-slate-700 rounded      
        inline-flex gap-2 items-center      
        shadow-md
        absolute left-[50%]
        translate-x-[-50%]
        transition-all duration-200
        ${isShown ? "top-[1%]" : "top-[-100%]"}
        `}
      >
        <CheckIcon />
        {message}
      </div>
    </>
  );
};

export default Toaster;
