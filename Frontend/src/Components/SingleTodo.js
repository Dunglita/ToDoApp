import React from "react";
import "../Css/SingleTodo.scss";
import Col from "react-bootstrap/Col";

export default function SingleTodo(props) {
  return (
    <>
      <div className="singleTodo-row">
        <Col className="singleTodo-main">
          <div className="singleTodo-inliner">
            <div className="cont1">
              <div className="cont2">{props.title}</div>
              <div className="cont3">{props.description}</div>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" className="checkTodo" />
            </div>
          </div>
        </Col>
        <div className="singleTodo-actions">
          <div className="singleTodo-inline">
            <button type="button" className="singleTodo-button">
              {" "}
              <i class="bi bi-pencil"></i>
            </button>
            <button
              type="button"
              className="singleTodo-button"
              title="Delete Todo"
            >
              <i class="bi bi-x-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
