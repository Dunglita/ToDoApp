import React, { useState } from "react";
import "./Css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import Folders from "./Components/Folders";
import Todos from "./Components/Todos";
import Sidebar from "./Components/Sidebar";
import TodoDetail from "./Components/TodoDetail";
import DeleteForm from "./Components/DeleteForm";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const [isActive, setActive] = useState(true);

  const handleToggleSideBar = () => {
    setActive(!isActive);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Home"
          element={
            <>
              <Sidebar
                handleToggleSideBar={handleToggleSideBar}
                isActive={isActive}
              />
              <Todos />
              <TodoDetail />
            </>
          }
        />
        <Route
          path="/folder"
          element={
            <>
              <Sidebar
                handleToggleSideBar={handleToggleSideBar}
                isActive={isActive}
              />
              <Folders />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
