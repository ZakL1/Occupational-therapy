function Navbar() {
  return (
    <nav className="bg-primary-dark text-white px-6 py-4 shadow-md">
      <div className="flex items-center space-x-4">
        {/* Placeholder Logo */}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-dark font-bold">
          L
        </div>
        {/* Site Name */}
        <span className="text-xl font-semibold">My Website</span>
      </div>
    </nav>
  );
}

export default Navbar;