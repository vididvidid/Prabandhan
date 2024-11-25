import { useState } from 'react';

function AddProjectModal({ 
  setShowAddProjectModal, 
  setProjects, 
  availableMembers = [] 
}) {
  const projectTypes = [
    'Business', 
    'Software', 
    'Hardware', 
    'Design', 
    'Research', 
    'Marketing'
  ];

  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    type: '',
    startDate: '',
    endDate: '',
    assignedMembers: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProjectData = {
      id: Date.now(),
      ...newProject,
      kanbanData: {
        todos: [],
        wip: [],
        completed: [],
      },
    };

    setProjects((prevProjects) => [...prevProjects, newProjectData]);
    setShowAddProjectModal(false);
  };

  const handleMemberToggle = (memberId) => {
    setNewProject(prev => ({
      ...prev,
      assignedMembers: prev.assignedMembers.includes(memberId)
        ? prev.assignedMembers.filter(id => id !== memberId)
        : [...prev.assignedMembers, memberId]
    }));
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
            <label className="block mb-1 font-medium">Project Description</label>
            <textarea
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Project Type</label>
            <select
              value={newProject.type}
              onChange={(e) => setNewProject({ ...newProject, type: e.target.value })}
              className="w-full border border-gray-300 rounded p-2"
              required
            >
              <option value="">Select Project Type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Start Date</label>
            <input
              type="date"
              value={newProject.startDate}
              onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">End Date</label>
            <input
              type="date"
              value={newProject.endDate}
              onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Assign Members</label>
            {availableMembers.length > 0 ? (
              <div className="grid grid-cols-2 gap-2">
                {availableMembers.map((member) => (
                  <label 
                    key={member.id} 
                    className={`flex items-center p-2 rounded cursor-pointer ${
                      newProject.assignedMembers.includes(member.id) 
                        ? 'bg-blue-100 border-blue-500' 
                        : 'bg-gray-100'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={newProject.assignedMembers.includes(member.id)}
                      onChange={() => handleMemberToggle(member.id)}
                      className="mr-2"
                    />
                    {member.name}
                  </label>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No members available</p>
            )}
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