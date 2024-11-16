import { useState } from 'react';

function AllProjects({ projects, setProjects, onViewBoard }) {
  const [isCreating, setIsCreating] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleCreateProject = (e) => {
    e.preventDefault();
    const newProject = { 
      id: Date.now(), 
      name: projectName, 
      description: projectDescription,
      kanbanData: {
        todos: [],
        wip: [],
        completed: []
      }
    };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setProjectName('');
    setProjectDescription('');
    setIsCreating(false);
  };

  return (
    <div>
      {/* Rest of the component remains the same */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Projects</h1>
        <button 
          onClick={() => setIsCreating(!isCreating)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          {isCreating ? 'Cancel' : 'Create New Project'}
        </button>
      </div>

      {isCreating && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Create New Project</h2>
          <form onSubmit={handleCreateProject} className="space-y-4">
            <div>
              <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="projectDescription"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex justify-end">
              <button 
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Create Project
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white border rounded-lg p-6 shadow hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <button 
                onClick={() => onViewBoard(project)}
                className="text-blue-500 hover:text-blue-600"
              >
                View Board
              </button>
              <button 
                onClick={() => {
                  setProjects(projects.filter(p => p.id !== project.id));
                }}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProjects;