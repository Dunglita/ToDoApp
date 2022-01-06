import React, { useState, useEffect } from "react";
import "../Css/Folders.css";
import SingleFolder from "../Components/SingleFolder";
import DeleteForm from "./DeleteForm";
export default function Folders() {
  const [folders, setFolders] = useState([]);
  useEffect(getFolders, []);

  async function getFolders() {
    try {
      const url = "http://localhost:8000/folder";
      const response = await fetch(url);
      const data = await response.json();
      setFolders(data);
    } catch (error) {
      console.error(error);
    }
  }
  function createFolderList() {
    const list = folders.map((folder) => {
      return (
        <SingleFolder
          title={folder.titleFolder}
          description={folder.descriptinFolder}
        />
      );
    });
    return list;
  }
  const deletemessage = "Are you sure you want to delete the Folder?";
  return (
    <div className="folders-wrapper">
      <div className="folders-header">
        <button type="button" className="addtodo-btn" title="Add todo">
          <i class="bi bi-plus-circle"></i>
        </button>
        <h1>My Folders</h1>
      </div>
      <div className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5">
        {createFolderList()}
      </div>
      <DeleteForm title={deletemessage} id={"test"} />
    </div>
  );
}
