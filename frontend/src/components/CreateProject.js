import React, { useState } from 'react';

function CreateProject() {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleCreate = () => {
    // Logic to create a project
    console.log('Project Created:', { projectName, projectDescription });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Project</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Project Name</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create Project
        </button>
      </form>
    </div>
  );
}

export default CreateProject;
