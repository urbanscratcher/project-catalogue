"use client";

import { Tag as TagType } from "@/@types/schema";
import { useEffect } from "react";
import useTechStackTag from "../hooks/useTechStackTag";
import Tag from "../layout/Tag";

interface TechStackTagsProps {
  techStack: TagType[];
}

const TechStackTags = ({ techStack }: TechStackTagsProps) => {
  const techStackTag = useTechStackTag();

  useEffect(() => {
    if (techStackTag.selectedTechStack.length > 0) {
      techStackTag.reset();
    }
  }, []);

  const handleClick = (i: TagType) => {
    if (
      !techStackTag.selectedTechStack.some((e: TagType) => e.name === i.name)
    ) {
      techStackTag.onSelect(i);
    } else {
      techStackTag.onDeselect(i);
    }
  };

  return (
    <>
      <span className="block space-x-2">
        {techStack.map((i) => (
          <Tag
            onClick={() => handleClick(i)}
            key={i.id}
            text={i.name}
            includeSharp={false}
            selected={
              techStackTag.selectedTechStack.some(
                (e: TagType) => e.name === i.name
              )
                ? true
                : false
            }
            selectable={true}
          />
        ))}
      </span>
    </>
  );
};

export default TechStackTags;
