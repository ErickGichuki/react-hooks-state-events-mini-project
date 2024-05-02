import React, {useState} from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  const onDeleteTask = (taskId) => {
    const updatedTasks = taskList.filter(task => task.id !== taskId);
    setTaskList(updatedTasks);
  };

  return (
    <div className="tasks">
      { tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
