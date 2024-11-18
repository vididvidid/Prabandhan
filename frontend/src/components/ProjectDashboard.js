import { useState } from 'react';
import AllProjects from './AllProjects';
import KanbanBoard from './KanbanBoard';
import AddProjectModal from './AddProjectModal'; 

function ProjectDashboard({ projects, setProjects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false); 

  const members = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ];

  const handleAddProject = () => {
    setShowAddProjectModal(true); 
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
