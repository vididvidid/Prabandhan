import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import ProjectDashboard from './components/ProjectDashboard';

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Project 1',
      description: 'Description 1',
      kanbanData: {
        todos: [],
        wip: [],
        completed: [],
      },
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Description 2',
      kanbanData: {
        todos: [],
        wip: [],
        completed: [],
      },
    },
  ]);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Routes>
            <Route
              path="/"
              element={<ProjectDashboard projects={projects} setProjects={setProjects} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
