"use client";

import { Tag as TagType } from "@/@types/schema";
import Tag from "./Tag";

interface TagsProps {
  data: TagType[];
  includeSharp?: boolean;
}

const Tags = ({ data, includeSharp = false }: TagsProps) => {
  return (
    <>
      <span className="block space-x-2">
        {data.map((i) => (
          <Tag
            key={i.id}
            text={i.name}
            includeSharp={includeSharp}
            selected={false}
            selectable={false}
          />
        ))}
      </span>
    </>
  );
};

export default Tags;
