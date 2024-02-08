import React, { useState } from "react";
import NavBar from "../../components/navigation/nav_bar.jsx";
import IDE from "../../components/editor/ide.jsx";

const Home = () => {
  const [code, setCode] = useState('console.log("nice")');
  const [output, setOuput] = useState("");
  const runCode = () => {
    setOuput(new Function(code)());
  };
  return (
    <div>
      <NavBar />
    </div>
  );
};

export default Home;
