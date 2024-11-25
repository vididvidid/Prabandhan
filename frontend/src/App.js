import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import ProjectDashboard from './components/ProjectDashboard';
import Login from './components/Login';
import Signup from './components/Signup';

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

  // State to store the current user (logged-in user)
  const [user, setUser] = useState(null);

  // Signup function that will set the user state
  const signup = (username) => {
    setUser(username); // Set the username as the logged-in user
  };

  // Login function (you can implement a similar approach for login)
  const login = (username) => {
    setUser(username); // Set the username as the logged-in user
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">

        <Navbar user={user} login={login} logout={() => setUser(null)} />

        <div className="flex flex-1 pt-16">
          <Sidebar />

          <div className="flex-1 p-6">
            <Routes>
              <Route
                path="/"
                element={<ProjectDashboard projects={projects} setProjects={setProjects} />}
              />
              <Route path="/login" element={<Login login={login} />} />
              <Route path="/signup" element={<Signup signup={signup} />} />
            </Routes>
          </div>
        </div>
      </div>
      
    </Router>
  );
}

export default App;
