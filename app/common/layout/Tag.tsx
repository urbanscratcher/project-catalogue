"use client";

interface TypeProps {
  text: string;
  includeSharp?: boolean;
  selected: boolean;
  selectable: boolean;
  onClick?: () => void;
}

const Tag = ({
  onClick,
  text,
  includeSharp = false,
  selected,
  selectable,
}: TypeProps) => {
  return (
    <>
      <span
        onClick={onClick ? onClick : () => null}
        className={`
          px-2 py-1
          rounded-xl 
         text-xs 
        border-slate-800 border
        cursor-pointer
        ${selectable ? "hover:bg-slate-800 hover:text-slate-50" : ""}
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
