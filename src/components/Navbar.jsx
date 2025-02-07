const Navbar = () => {
    return (
      <nav className="bg-gray-700 p-4">
        <div className="flex items-center justify-end">
          <ul className="flex space-x-6 text-white">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  