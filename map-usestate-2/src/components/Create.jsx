import React, { useState } from "react";
import { nanoid } from "nanoid";

const Create = ({ todo, setTodo }) => {
const [title, setTitle] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newtodo = {
    id: nanoid(),
    title: title.trim(),
    isActive: true,
    };
    setTodo([...todo, newtodo]);
    setTitle("");
};

return (
    <form
    onSubmit={handleSubmit}
    className="flex gap-2 items-center justify-between mb-4"
    >
    <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a task..."
        className="flex-1 px-4 py-2 border border-blue-500 rounded-md outline-none "
    />
    <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
    >
        Create
    </button>
    </form>
);
};

export default Create;