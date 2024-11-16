function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-500 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold">MENU</div>
      <nav className="flex-1 px-4">
        <ul>
          <li className="mb-2">
            <a href="/" className="block px-4 py-2 hover:bg-blue-600 rounded">
              Home
            </a>
          </li>
          {/* Add more links here */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
