"use client";

import useCopyToaster from "@/app/common/hooks/useCopyToaster";
import { BiCopy as CopyIcon } from "react-icons/bi";

const Email = () => {
  const copyToast = useCopyToaster();

  const handleClick = async () => {
    await window.navigator.clipboard.writeText("urbanscratcher@gmail.com");
    copyToast.onOpen();
  };

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
