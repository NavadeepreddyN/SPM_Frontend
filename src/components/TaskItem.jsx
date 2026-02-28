const TaskItem = ({ task }) => {
  return (
    <li>
      {task.name} - {task.completed ? "✅" : "❌"}
    </li>
  );
};

export default TaskItem;