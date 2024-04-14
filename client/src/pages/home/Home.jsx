import React, { useState } from "react";
import NavBar from "../../components/navigation/nav_bar.jsx";
import IDE from "../../components/editor/ide.jsx";
import Sidebar from "../../components/settings/sidebar.jsx";
import SuggestedPeople from "../../components/home/suggested_people.jsx";

const Home = () => {
  return (
    <div>
      <NavBar />
      <SuggestedPeople />
    </div>
  );
};

export default Home;
