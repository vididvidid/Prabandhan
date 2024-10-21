import { useState } from "react";

export default function KanbanBoard() {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [wip, setWip] = useState([]);

  function handleAdd(e) {
    e.preventDefault();
    if (title.trim()) {
      const newTodo = {
        title: title,
        description: description,
      };
      setTodos([...todos, newTodo]);
      setTitle("");
      setDescription("");
      setIsOpen(false);
    }
  }

  function moveToWip(index) {
    const itemToMove = todos[index];
    setWip([...wip, itemToMove]);
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex gap-8">
        {/* Todo List */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">To-Do List</h1>
            <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              +
            </button>
          </div>

          <div className="space-y-4">
            {todos.map((todo, index) => (
              <div key={index} className="border p-4 rounded shadow">
                <h3 className="font-bold">{todo.title}</h3>
                <p className="text-gray-600 mt-2">{todo.description}</p>
                <button
                  onClick={() => moveToWip(index)}
                  className="mt-3 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Move to Work in Progress
                </button>
              </div>
            ))}
          </div>
        </div>

            {isOpen && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg w-80">
                  <form onSubmit={handleAdd}>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Task name"
                      className="w-full border p-2 mb-4 rounded"
                      required
                    />
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Description"
                      className="w-full border p-2 mb-4 rounded"
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Add
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIsOpen(false);
                          setTitle("");
                          setDescription("");
                        }}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
        {/* Work in Progress List */}
        <div className="w-full">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Work in Progress</h1>
          </div>
          <div className="space-y-4">
            {wip.map((wi, index) => (
              <div key={index} className="border p-4 rounded shadow">
                <h3 className="font-bold">{wi.title}</h3>
                <p className="text-gray-600 mt-2">{wi.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
