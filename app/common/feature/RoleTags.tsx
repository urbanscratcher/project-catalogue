import React from "react";
import Tags from "../layout/Tags";

const RoleTags = ({ roles }) => {
  return (
    <>
      <p className="text-l my-2">Filtered by Role</p>
      <Tags data={roles} />
    </>
  );
};

export default RoleTags;
