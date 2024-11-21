import { useState } from 'react';

function AddProjectModal({ setShowAddProjectModal, setProjects }) {
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
  });

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProjectData = {
      id: Date.now(), // Generate a unique id using timestamp
      name: newProject.name,
      description: newProject.description,
      kanbanData: {
        todos: [],
        wip: [],
        completed: [],
      },
    };

    // Add the new project to the list
    setProjects((prevProjects) => [...prevProjects, newProjectData]);

    // Close the modal
    setShowAddProjectModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-lg font-bold mb-4 text-center">Add New Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Project Name</label>
            <input
              type="text"
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Add Project
          </button>
        </form>
        <button
          onClick={() => setShowAddProjectModal(false)}
          className="w-full mt-4 py-2 text-gray-700 hover:bg-gray-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddProjectModal;
