import React from "react";
import { Link } from "react-router-dom";

const ListMenu = ({ icon, title, link, className }) => {
  return (
    <li className="cursor-pointer hover:bg-gray-200 hover:rounded-md py-5">
      <Link to={link}>
        <p className={className}>
          {icon}
          {title}
        </p>
      </Link>
    </li>
  );
};

export default ListMenu;
