import React, { createElement, useState } from "react";
import SearchBar from "../../components/buttons/search_bar.jsx";
import GroupList from "../../components/groups/group_list.jsx";
import CreateNewGroupModal from "./create_new_group.jsx";

const GroupsHome = () => {
  const [createGroup, setCreateGroup] = useState(false);

  const openNewGroupModal = () => setCreateGroup(true);
  const closeNewGroupModal = () => setCreateGroup(false);

  return (
    <>
      <SearchBar placeholder={"Search for Groups"} />
      <div className="p-4">
        Sort Groups{" "}
        <button className="p-2 border shadow-md rounded-lg">sort</button>{" "}
      </div>
      <GroupTabs />
      <button
        className="p-2 mt-8 ml-4 border shadow-md"
        onClick={openNewGroupModal}
      >
        Create Group
      </button>
      <CreateNewGroupModal isOpen={createGroup} onClose={closeNewGroupModal}/>
    </>
  );
};

const GroupTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      name: "Joined Groups",
      items: [
        "Group 1",
        "Group 2",
        "Group 3",
        "Group 4",
        "Group 5",
        "Group 6",
        "Group 7",
        "Group 8",
        "Group 9",
        "Group 10",
      ],
    },
    { id: 1, name: "Popular Groups", items: ["Group 4", "Group 5", "Group 6"] },
    {
      id: 2,
      name: "Groups you Created",
      items: ["Group 7", "Group 8", "Group 9"],
    },
  ];

  return (
    <div>
      <div className="flex mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`mr-2 px-4 py-2 rounded ${
              activeTab === tab.id ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div>
        <GroupList items={tabs[activeTab].items} />
      </div>
    </div>
  );
};

export default GroupsHome;
