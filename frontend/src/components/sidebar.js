import React from 'react';

const Sidebar = () => {

  return (
    <div className="w-64 h-screen bg-blue-600 text-white p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-6">ABC</h2>
      <div className="flex flex-col space-y-2">
          <button className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-blue-100 transition-colors duration-200">Board</button>
      </div>
    </div>
  );
};

export default Sidebar;