import { Link } from 'react-router-dom';

const Header = () => (
  <div className="text-center w-full">
    <h1 className="text-4xl font-bold mb-4 text-white">Bloger's World</h1>
    <p className="mb-4 text-white">A place to share knowledge and insights.</p>
    
    <div className="mt-6">
      <div className="flex flex-wrap justify-center gap-6">
        <Link to="/category/arts" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">Arts</Link>
        <Link to="/category/science" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">Science</Link>
        <Link to="/category/technology" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">Technology</Link>
        <Link to="/category/music" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">Music</Link>
        <Link to="/category/health" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">Health</Link>
        <Link to="/category/lifestyle" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">Lifestyle</Link>
        <Link to="/category/food" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">Food</Link>
        <Link to="/category/travel" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">Travel</Link>
      </div>

      <div className="mt-8 flex justify-center">
        <Link to="/addblog" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">Add Blog</Link>
      </div>
    </div>
  </div>
);

export default Header;