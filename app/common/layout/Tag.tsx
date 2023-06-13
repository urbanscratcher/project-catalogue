"use client";

import { useEffect } from "react";

interface TypeProps {
  text: string;
  includeSharp?: boolean;
  selected: boolean;
  onClick: () => void;
}

const Tag = ({ onClick, text, includeSharp = false, selected }: TypeProps) => {
  useEffect(() => {
    console.log("tag mounted");
  }, []);

  return (
    <>
      <span
        onClick={onClick}
        className={`
          px-2 py-1
          rounded-xl 
         text-xs 
        border-slate-800 border
        cursor-pointer
        hover:bg-slate-800 hover:text-slate-50
        ${selected ? "bg-slate-800 text-slate-50" : "text-slate-800"}
        `}
      >
        {includeSharp ? "#" : ""}
        {text}
      </span>
    </>
  );
};

export default Tag;
