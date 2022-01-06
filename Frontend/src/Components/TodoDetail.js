import React from "react";
import "../Css/TodoDetail.css";
export default function TodoDetail() {
  return (
    <div className="detail-wrapper">
      <div className="detail-header">
        <h1>Edit ToDo</h1>
      </div>
      <div className="detail-content">
        <form>
          <label for="todoTitle">Todo Title</label>
          <input type="text" id="todoTitle" />
          <label for="todoDescription">Todo Description</label>
          <input type="text" id="todoDescription" />
          <div className="detail-btn-row">
            <button>Confirmar</button>
            <button>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
