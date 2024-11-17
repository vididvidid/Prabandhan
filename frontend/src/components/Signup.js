import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ signup }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle signup form submission
  const handleSignup = (e) => {
    e.preventDefault();
    if (name && email && password) {
      signup(name); // Pass the name to the signup function
      navigate('/'); // Redirect to the home page after successful signup
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-lg font-bold mb-4 text-center">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              required
              value={name}
              onChange={(e) => setName(e.target.value)} // Set name state on input change
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded p-2"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Set email state on input change
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded p-2"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Set password state on input change
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
