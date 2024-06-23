import React, { useState } from "react";
import NavBar from "../../components/navigation/nav_bar.jsx";
import IDE from "../../components/editor/ide.jsx";
import Sidebar from "../../components/settings/sidebar.jsx";
import SuggestedPeople from "../../components/home/suggested_people.jsx";
import checkLogin from "../../utils/check_login.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = checkLogin();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);


  return (
    <div>
      <NavBar />
      <SuggestedPeople />
    </div>
  );
};

export default Home;
