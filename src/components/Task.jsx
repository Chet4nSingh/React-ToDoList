export default function Task({ task, onDelete }) {
  return (
    <li className="p-4 my-6 group flex justify-between items-center border hover:scale-[1.025]">
      <p>{task.task}</p>
      <div className="hidden gap-4 group-hover:block">
        <button>
          <i className="fas fa-edit mr-4 hover:scale-110 hover:text-yellow-400"></i>
        </button>
        <button onClick={() => onDelete(task.id)}>
          <i className="fa fa-trash mr-2 hover:scale-110 hover:text-red-400"></i>
        </button>
      </div>
    </li>
  );
}
