import { useState } from 'react';

function AssignMembersModal({ project, setShowAssignModal, setProjects }) {
  const [selectedMembers, setSelectedMembers] = useState(project.teamMembers || []); // Initialize with existing members

  const availableMembers = ['John', 'Jane', 'Bob', 'Alice']; // Example of available members

  const handleMemberToggle = (member) => {
    if (selectedMembers.includes(member)) {
      setSelectedMembers(selectedMembers.filter((m) => m !== member));
    } else {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  const handleAssignMembers = () => {
    const updatedProject = {
      ...project,
      teamMembers: selectedMembers, // Update the team members in the project
    };
    setProjects((prevProjects) =>
      prevProjects.map((proj) =>
        proj.id === project.id ? updatedProject : proj
      )
    );
    setShowAssignModal(false); // Close the modal after assigning
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-lg font-bold mb-4 text-center">Assign Members to {project.name}</h2>

        {/* Display the list of available members */}
        <div className="mb-4">
          {availableMembers.map((member) => (
            <div key={member} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={member}
                checked={selectedMembers.includes(member)}
                onChange={() => handleMemberToggle(member)}
                className="mr-2"
              />
              <label htmlFor={member}>{member}</label>
            </div>
          ))}
        </div>

        {/* Assign Members Button */}
        <button
          onClick={handleAssignMembers}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Assign Members
        </button>

        {/* Close Modal Button */}
        <button
          onClick={() => setShowAssignModal(false)}
          className="w-full mt-4 bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default AssignMembersModal;
