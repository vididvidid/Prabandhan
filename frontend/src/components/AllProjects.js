import React from 'react';

function AllProjects({ projects, setProjects, onViewBoard }) {
  const handleDeleteProject = (projectId) => {
    setProjects((prevProjects) => 
      prevProjects.filter((project) => project.id !== projectId)
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-2">{project.description}</p>
            
            {project.type && (
              <div className="mb-2">
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {project.type}
                </span>
              </div>
            )}
            
            <div className="mb-2">
              <p className="text-sm">
                <span className="font-medium">Start Date:</span> {project.startDate}
              </p>
              <p className="text-sm">
                <span className="font-medium">End Date:</span> {project.endDate}
              </p>
            </div>
            
            <div className="mt-2">
              <h4 className="text-sm font-medium text-gray-700 mb-1">Assigned Members:</h4>
              {project.assignedMembers && project.assignedMembers.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {project.assignedMembers.map((memberId) => (
                    <span 
                      key={memberId} 
                      className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded"
                    >
                      Member {memberId}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No members assigned</p>
              )}
            </div>
          </div>
          
          <div className="flex justify-between mt-4">
            <button
              onClick={() => onViewBoard(project)}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
            >
              View Board
            </button>
            <button
              onClick={() => handleDeleteProject(project.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllProjects;