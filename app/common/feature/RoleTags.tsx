"use client";

import { Tag as TagType } from "@/@types/schema";
import useRoleTag from "../hooks/useRoleTag";
import Tag from "../layout/Tag";

interface RoleTagsProps {
  roles: TagType[];
}

const RoleTags = ({ roles }: RoleTagsProps) => {
  const roleTag = useRoleTag();
  const handleClick = (tag: TagType) => {
    if (!roleTag.selectedRoles.some((e: TagType) => e.name === tag.name)) {
      roleTag.onSelect(tag);
    } else {
      roleTag.onDeselect(tag);
    }
  };

  return (
    <>
      <span className="block space-x-2">
        {roles.map((role) => (
          <Tag
            onClick={() => handleClick(role)}
            key={role.id}
            text={role.name}
            includeSharp={false}
            selected={
              roleTag.selectedRoles.some(
                (tag: TagType) => tag.name === role.name
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

export default RoleTags;
