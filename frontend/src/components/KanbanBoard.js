import { useState } from "react";

function KanbanBoard({ selectedProject, onClose, projects, setProjects }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateProjectKanbanData = (newKanbanData) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === selectedProject.id
          ? { ...project, kanbanData: newKanbanData }
          : project
      )
    );

    // Update local `selectedProject` for immediate UI updates
    selectedProject.kanbanData = newKanbanData;
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTask = {
        title,
        description,
        projectId: selectedProject.id,
      };

      const updatedKanbanData = {
        ...selectedProject.kanbanData,
        todos: [...selectedProject.kanbanData.todos, newTask],
      };

      // Update state
      updateProjectKanbanData(updatedKanbanData);

      // Reset form fields
      setTitle("");
      setDescription("");
      setIsOpen(false);
    } else {
      alert("Task name is required");
    }
  };

  const moveToWip = (index) => {
    const itemToMove = selectedProject.kanbanData.todos[index];
    const updatedKanbanData = {
      ...selectedProject.kanbanData,
      todos: selectedProject.kanbanData.todos.filter((_, i) => i !== index),
      wip: [...selectedProject.kanbanData.wip, itemToMove],
    };
    updateProjectKanbanData(updatedKanbanData);
  };

  const moveToCompleted = (index) => {
    const itemToMove = selectedProject.kanbanData.wip[index];
    const updatedKanbanData = {
      ...selectedProject.kanbanData,
      wip: selectedProject.kanbanData.wip.filter((_, i) => i !== index),
      completed: [
        ...selectedProject.kanbanData.completed,
        { ...itemToMove, completedAt: new Date() },
      ],
    };
    updateProjectKanbanData(updatedKanbanData);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">{selectedProject.name} - Kanban Board</h1>
          <p className="text-gray-600">{selectedProject.description}</p>
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Close Board
        </button>
      </div>

      <div className="flex gap-8">
        {/* To-Do List */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">To-Do</h2>
            <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Add Task
            </button>
          </div>

          <div className="space-y-4">
            {selectedProject.kanbanData.todos.map((todo, index) => (
              <div key={index} className="border p-4 rounded-lg shadow bg-white">
                <h3 className="font-bold">{todo.title}</h3>
                <p className="text-gray-600 mt-2">{todo.description}</p>
                <button
                  onClick={() => moveToWip(index)}
                  className="mt-3 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  Move to Work in Progress
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Work in Progress */}
        <div className="w-full">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Work in Progress</h2>
          </div>
          <div className="space-y-4">
            {selectedProject.kanbanData.wip.map((wi, index) => (
              <div key={index} className="border p-4 rounded-lg shadow bg-white">
                <h3 className="font-bold">{wi.title}</h3>
                <p className="text-gray-600 mt-2">{wi.description}</p>
                <button
                  onClick={() => moveToCompleted(index)}
                  className="mt-3 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
                >
                  Move to Completed
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Completed */}
        <div className="w-full">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Completed</h2>
          </div>
          <div className="space-y-4">
            {selectedProject.kanbanData.completed.map((item, index) => (
              <div key={index} className="border p-4 rounded-lg shadow bg-gray-50">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Completed: {item.completedAt.toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
            <form onSubmit={handleAddTask}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Task Name
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setTitle("");
                    setDescription("");
                  }}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default KanbanBoard;
