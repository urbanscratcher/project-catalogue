"use client";

import { useToastStore } from "@/app/hooks/useToastStore";
import React, { useEffect } from "react";
import { BsCheckCircleFill as CheckIcon } from "react-icons/bs";

interface ToastProps {
  text: string;
}

const Toast = ({ text }: ToastProps) => {
  const show = useToastStore((state) => state.show);
  const removeToast = useToastStore((state) => state.removeToast);

  useEffect(() => {
    if (show) {
      const tick = setTimeout(() => {
        removeToast();
      }, 1000);

      return () => {
        return clearTimeout(tick);
      };
    }
  }, [show, removeToast]);

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
        ${show ? "top-[1%]" : "top-[-100%]"}
        `}
      >
        <CheckIcon />
        {text}
      </div>
    </>
  );
};

export default Toast;
