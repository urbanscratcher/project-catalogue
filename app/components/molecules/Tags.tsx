import { Tag as TagType } from "@/@types/schema";
import Tag from "../atoms/Tag";
import Link from "next/link";

interface TagsProps {
  data: TagType[];
  includeSharp?: boolean;
}

const Tags = ({ data, includeSharp = false }: TagsProps) => {
  return (
    <>
      <span className="block space-x-2">
        {data.map((i) => (
          <Tag key={i.id} text={i.name} includeSharp={includeSharp} />
        ))}
      </span>
    </>
  );
};

export default Tags;
