interface TypeProps {
  text: string;
  includeSharp?: boolean;
}

const Tag = ({ text, includeSharp = false }: TypeProps) => {
  return (
    <>
      <span
        className="
          px-2 py-1
          rounded-xl 
        text-slate-800 text-xs 
        border-slate-800 border
        cursor-pointer
        hover:bg-slate-800 hover:text-slate-50
        "
      >
        {includeSharp ? "#" : ""}
        {text}
      </span>
    </>
  );
};

export default Tag;
