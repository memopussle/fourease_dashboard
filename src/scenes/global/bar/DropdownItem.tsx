import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "@chakra-ui/react";

interface Item {
  link: string;
  color: string;
  content: string;
}

const DropdownItem = ({ link, color, content }: Item): JSX.Element => {
  return (
    <Link to={link}>
      <MenuItem color={color}>{content}</MenuItem>
    </Link>
  );
};

export default DropdownItem;
