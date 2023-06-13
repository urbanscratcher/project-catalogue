import React from "react";
import Tags from "../layout/Tags";

const TechStackTags = ({ techStack }) => {
  return (
    <>
      <p className="text-l my-2">Filtered by Tech Stack</p>
      <Tags data={techStack} />
    </>
  );
};

export default TechStackTags;
