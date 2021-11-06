import React, { createContext, useState } from "react";

export const TaskContext = createContext(null);

const TaskHandlerContext = ({ children }) => {
  const [state, setState] = useState({
    task1: false,
    task2: false,
    task3: false,
    task4: false,
    task5: false,
    task6: false,
    task7: false,
  });
  const updateState = (newState) => {
    setState({ ...state, ...newState });
  };
  const resetState = () => {
    setState({
      task1: false,
      task2: false,
      task3: false,
      task4: false,
      task5: false,
      task6: false,
      task7: false,
    });
  };
  return (
    <TaskContext.Provider value={{ state, updateState, resetState }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskHandlerContext;
