import React from 'react';

function AllProjects({ projects, setProjects, onViewBoard, onAssignMembers }) {

  // Function to delete the project
  const handleDeleteProject = (projectId) => {
    // Filter out the project with the specified id
    const updatedProjects = projects.filter((project) => project.id !== projectId);
    setProjects(updatedProjects); // Update the projects list after deletion
  };

  return (
    <div>

      {/* Grid layout to display projects side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
          >
            <div>
              <h3 className="font-bold text-lg">{project.name}</h3>
              <p>{project.description}</p>

              {/* Display the assigned members */}
              {project.teamMembers && project.teamMembers.length > 0 && (
                <div className="mt-2">
                  <h4 className="font-semibold">Assigned Members:</h4>
                  <ul className="list-disc pl-5">
                    {project.teamMembers.map((member, index) => (
                      <li key={index}>{member}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Buttons for actions */}
            <div className="flex justify-between mt-4 space-x-2">
              {/* View Kanban Board Button */}
              <button
                onClick={() => onViewBoard(project)}
                className="bg-blue-500 text-white px-3 py-1 text-sm rounded-md hover:bg-blue-600 transition"
              >
                View Board
              </button>

              {/* Assign Members Button */}
              <button
                onClick={() => onAssignMembers(project)} // Open the modal for the selected project
                className="bg-green-500 text-white px-3 py-1 text-sm rounded-md hover:bg-green-600 transition"
              >
                Assign Members
              </button>

              {/* Delete Project Button */}
              <button
                onClick={() => handleDeleteProject(project.id)} // Call delete function when clicked
                className="bg-red-500 text-white px-3 py-1 text-sm rounded-md hover:bg-red-600 transition"
              >
                Delete Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
