"use client";

import useCopyToaster from "@/app/common/hooks/useCopyToaster";
import Toaster from "../layout/Toaster";

const CopyToaster = () => {
  const copyToaster = useCopyToaster();

  return (
    <Toaster
      isShown={copyToaster.isShown}
      onClose={copyToaster.onClose}
      message={"Copied :)"}
    />
  );
};

export default CopyToaster;
