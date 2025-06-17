import React from "react";

const Read = ({ todo, setTodo }) => {
const toggleStatus = (id) => {
    const updatedTodos = todo.map((item) =>
    item.id === id ? { ...item, isActive: !item.isActive } : item
    );
    setTodo(updatedTodos);
};

const deleteHandler = (id) => {
    const filtertodo = todo.filter((item) => item.id !== id);
    setTodo(filtertodo);
};

return (
    <ul className="space-y-3">
    {todo?.map((item) => (
        <li
        key={item.id}
        className="flex justify-between items-center p-3 rounded-lg shadow-sm bg-gray-50"
        >
        <span
            className={`text-lg font-medium flex-1 ${
            item.isActive ? "text-gray-800" : "line-through text-gray-400"
            }`}
        >
            {item.title}
        </span>
        <div className="flex gap-2">
            <button
            className={`px-3 py-1 rounded-md text-white text-sm ${
                item.isActive ? "bg-blue-400 hover:bg-blue-500" : "bg-orange-400 hover:bg-orange-500"
            }`}
            onClick={() => toggleStatus(item.id)}
            >
            {item.isActive ? "Mark as Done" : "Undo"}
            </button>
            <button
            className="px-3 py-1 rounded-md bg-red-400 hover:bg-red-500 text-white text-sm"
            onClick={() => deleteHandler(item.id)}
            >
            Delete
            </button>
        </div>
        </li>
    ))}
    </ul>
);
};

export default Read;
