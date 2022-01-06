import React from "react";
import "../Css/DeleteForm.css";
export default function DeelteTodoModal(props) {
  return (
    <div className="deletefor-wrapper">
      <form>
        <h3>{props.title} </h3>
        <button onClick={() => alert("Deleted")}>Delete</button>
        <button onClick={() => alert("Are you sure you want to delete")}>
          Cancel
        </button>
      </form>
    </div>
  );
}
