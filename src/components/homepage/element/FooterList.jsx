import React from "react";

const FooterList = ({ data, title }) => {
  const titleStyle = "text-sm font-semibold";

  return (
    <div>
      <h3 className={titleStyle}>{title}</h3>
      <ul>
        {data.map((item) => {
          return (
            <a href={item.link} key={item.title}>
              <li className="text-sm text-gray-700 mt-3">{item.title}</li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterList;
