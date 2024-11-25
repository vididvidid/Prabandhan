import React, { useState } from "react";
// import axios from "axios";

function Signup({ navigateToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("team_member"); // Default role

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:5000/signup", {
  //       username,
  //       password,
  //       role,
  //     });
  //     alert(response.data.message);
  //     navigateToLogin();
  //   } catch (err) {
  //     alert(err.response.data.message || "Signup failed");
  //   }
  // };

  const handleSignup = (e) => {
      e.preventDefault();
      console.log(e);
    };

  return (
    <div className="w-full max-w-sm mx-auto mt-20">
      <form onSubmit={handleSignup} className="bg-white p-6 shadow-md rounded">
        <h2 className="text-lg font-semibold mb-4 text-center">Sign Up</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Username</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Role</label>
          <select
            className="w-full p-2 border rounded"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="team_member">Team Member</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sign Up
        </button>

        <div className="text-sm text-center mt-4">
          Already have an account?{" "}
          <button
            type="button"
            onClick={navigateToLogin}
            className="text-blue-500 underline"
          >
            Log in here
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
