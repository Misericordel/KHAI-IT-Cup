import "./Task.css";
import React from "react";
import { Link } from "react-router-dom";

const Task = ({ number, name, description, link }) => {
  return (
    <div className="task">
      <div className="task-number">Завдання №{number}</div>
      <div className="task-name">{name}</div>
      <div className="task-description">
        {description}
        <Link to={link} className="task-button ui button primary ">
          Перейти
        </Link>
      </div>
    </div>
  );
};
export default Task;
