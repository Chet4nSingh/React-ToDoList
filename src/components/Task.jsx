import { useState } from "react";

export default function Task({ task, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);

  function handleEditTask() {
    setIsEditing((prevState) => !prevState);
  }

  function handleChange(e) {
    task.task = e.target.value;
    setEditedTask(e.target.value);
  }

  return (
    <li className="p-4 my-6 group flex justify-between items-center border hover:scale-[1.025]">
      {isEditing ? (
        <input
          type="text"
          onChange={handleChange}
          value={editedTask}
          className="p-2 pl-4 w-3/4 outline-none text-black"
        />
      ) : (
        <p className="p-2 w-3/4 font-bold">{editedTask}</p>
      )}
      <div className="hidden gap-4 group-hover:block">
        <button onClick={handleEditTask}>
          {isEditing ? (
            <i className="fas fa-save mr-4 hover:scale-110 hover:text-yellow-400"></i>
          ) : (
            <i className="fas fa-edit mr-4 hover:scale-110 hover:text-yellow-400"></i>
          )}
        </button>
        <button onClick={() => onDelete(task.id)}>
          <i className="fa fa-trash mr-2 hover:scale-110 hover:text-red-400"></i>
        </button>
      </div>
    </li>
  );
}
