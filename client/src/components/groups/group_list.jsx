import React from "react";

const GroupList = ({ items }) => {
  return (
    <div className="overflow-y-auto max-h-80">
      <ul className="p-2 divide-y divide-gray-200">
        {items.map((item, index) => (
          <li key={index} className="py-2 flex justify-between">
            <img src="" alt="Group's Photo" />
            <div>
              <div>{item}</div>
              <div>Description about the Group</div>
            </div>
            <div className="flex">41K members</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
