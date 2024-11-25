import { useState } from 'react';
import AllProjects from './AllProjects';
import KanbanBoard from './KanbanBoard';
// import AssignMembersModal from './AssignMembersModal'; // Import the Assign Members Modal
import AddProjectModal from './AddProjectModal'; // Import the Add Project Modal

function ProjectDashboard({ projects, setProjects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  // const [showAssignModal, setShowAssignModal] = useState(false); // To control the modal visibility
  // const [projectToAssign, setProjectToAssign] = useState(null); // To store the selected project for assigning members
  const [showAddProjectModal, setShowAddProjectModal] = useState(false); // For Add Project modal visibility

  const members = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ];

  // Function to open the Add Project modal
  const handleAddProject = () => {
    setShowAddProjectModal(true); // Show the modal to add a new project
  };

  return (
    <div className="space-y-6">
      {/* All Projects Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">All Projects</h2>
        <button
          onClick={handleAddProject}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Project
        </button>
      </div>

      <AllProjects
        projects={projects}
        setProjects={setProjects}
        onViewBoard={(project) => setSelectedProject(project)}
      />

      <hr />

      {/* Kanban Board Section */}
      {selectedProject && (
        <div className="mt-6">
          <KanbanBoard
            selectedProject={selectedProject}
            onClose={() => setSelectedProject(null)}
            projects={projects}
            setProjects={setProjects}
          />
        </div>
      )}

      {/* Assign Members Modal */}
      {/* {showAssignModal && (
        <AssignMembersModal
          project={projectToAssign} // Pass selected project to modal
          setShowAssignModal={setShowAssignModal} // Function to close modal
          setProjects={setProjects} // Function to update projects after assigning members
        />
      )} */}

      {/* Add Project Modal */}
      {showAddProjectModal && (
        <AddProjectModal
          setShowAddProjectModal={setShowAddProjectModal}
          setProjects={setProjects}
          availableMembers={members}
        />
      )}
    </div>
  );
}

export default ProjectDashboard;
