import { useState } from 'react';
import AllProjects from './AllProjects';
import KanbanBoard from './KanbanBoard';

function ProjectDashboard({ projects, setProjects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="space-y-6">
      {/* All Projects Section */}
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
    </div>
  );
}

export default ProjectDashboard;
