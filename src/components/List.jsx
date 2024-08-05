import { useRef, useState } from "react";
import Task from "./Task";

export default function List() {
  const [tasks, setTasks] = useState([]);
  const input = useRef();

  function handleAddTask() {

    if (input.current.value.trim() === '') {
      return;
    }
    
    const newTask = {
      task: input.current.value,
      id: Math.random() * 1000,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
    input.current.value = '';
  }

  function handleDeleteTask(id) {
    setTasks((prevTasks) => [...prevTasks.filter(task => task.id !== id)]);
  }

  return (
    <main className="w-2/3 bg-zinc-800 text-white flex justify-center items-center">
      <div id="list" className="w-2/3 bg-teal-700 border p-8">
        <div className="border flex justify-between">
          <input
            ref={input}
            type="text"
            placeholder="What's next?"
            className="p-2 pl-4 w-3/4 outline-none text-black"
          />
          <button
            onClick={handleAddTask}
            className="p-2 w-1/4 font-bold bg-white border-l-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white"
          >
            Add Task
          </button>
        </div>
        <ul>{tasks.map(task => {
            return <Task key={task.id} task={task} onDelete={handleDeleteTask} />
        })}</ul>
      </div>
    </main>
  );
}
