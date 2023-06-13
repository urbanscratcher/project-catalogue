"use client";

import { Tag as TagType } from "@/@types/schema";
import { useState } from "react";
import Tag from "./Tag";

interface TagsProps {
  data: TagType[];
  includeSharp?: boolean;
}

const Tags = ({ data, includeSharp = false }: TagsProps) => {
  const [arr, setArr] = useState([]);

  const handleClick = (i: TagType) => {
    const newArr = [...arr];
    if (!arr.some((e: TagType) => e.name === i.name)) {
      newArr.push(i);
      setArr(newArr);
    } else {
      setArr(arr.filter((n: TagType) => n.name !== i.name));
    }
  };

  return (
    <>
      <span className="block space-x-2">
        {data.map((i) => (
          <Tag
            onClick={() => handleClick(i)}
            key={i.id}
            text={i.name}
            includeSharp={includeSharp}
            selected={
              arr.some((e: TagType) => e.name === i.name) ? true : false
            }
          />
        ))}
      </span>
    </>
  );
};

export default Tags;
