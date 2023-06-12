"use client";

import { useToastStore } from "@/app/hooks/useToastStore";
import { BiCopy as CopyIcon } from "react-icons/bi";

const Email = () => {
  const handleClick = useToastStore((state) => state.showToast);

  return (
    <p
      className="
flex items-center
hover:border-b cursor-pointer border-slate-600
"
      onClick={handleClick}
    >
      <CopyIcon />
      &nbsp; urbanscratcher@gmail.com
    </p>
  );
};

export default Email;
