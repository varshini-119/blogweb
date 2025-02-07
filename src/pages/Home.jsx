import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, ThumbsUp, Trash } from 'lucide-react'; 
import Header from './Header';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const staticBlogs = [
    {
      title: 'The Science of Innovation',
      image: 'https://cdn.gencraft.com/prod/user/ba31788e-4880-47e5-8de5-37acc97e6613/3c181c44-eb52-4aca-bd54-8cb9b294e2a5/image/image1_0.jpg?Expires=1738775657&Signature=XibX7L4BzrKumfhriqqjmXDiLTirmlHm2CLExgptUVpxQ6v~5l89CPUe3BffKByCI-o9Xuxt5Kv6Q1dJQVReprrxx-GeOHiLLnDOno-m7l9T2t15rdsrT~-~XoiJ2ID9szPJOJnRhNVL3tFbdywOn-i-kF3BQ56G~PrjMZiWMkPrzMu0oKtjrUHPoVaaiU~HOn~OfAEaMKLfxt6iuBh19xdApK5DwbQADk~H0fAaJ7bzGvg3p7UBfS31zLPNl~gMlaKApGqYpUOKyyevAwb-MhpefwCIyGQ81x9IIJdmXvE78lQ-6EdEgV0NK5iMWcJxbp8-2xW5ACd7-fzJt2r~-g__&Key-Pair-Id=K3RDDB1TZ8BHT8',
      description: 'A deep dive into the latest technological advancements and their impact on our daily lives.',
      views: 250,
      likes: 150
    },
    {
      title: 'Artistic Expressions',
      image: 'https://th.bing.com/th/id/OIP.PEuhfi_1blF7TZGBXIaRagHaJL?w=146&h=181&c=7&r=0&o=5&pid=1.7',
      description: 'Exploring the beauty of creative arts and how they shape our culture and society.',
      views: 320,
      likes: 200
    },
    {
      title: 'Health and Wellness',
      image: 'https://th.bing.com/th/id/OIP.PEuLhZHikHJl7NzRMEoVygHaE7?w=254&h=180&c=7&r=0&o=5&pid=1.7',
      description: 'Tips on maintaining physical and mental health through mindful living and exercise.',
      views: 410,
      likes: 230
    },
    {
      title: 'Business Trends',
      image: 'https://th.bing.com/th/id/OIP.-T0ID-UJy_dBKiy-cEzyKwHaFR?w=265&h=189&c=7&r=0&o=5&pid=1.7',
      description: 'Insights into the latest trends in the business world and tips for aspiring entrepreneurs.',
      views: 320,
      likes: 180
    }
  ];

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  const deleteBlog = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1); // Remove the blog
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  const incrementLikes = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index].likes += 1; // Increment the likes
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  const incrementViews = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index].views += 1; // Increment the views
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  const allBlogs = [...staticBlogs,...blogs];

  return (
    <motion.div 
      className="flex items-center justify-center min-h-screen bg-gray-800 p-6" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
    >
      <div className="w-full">
        <Header />
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md w-full space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Blogs I'm Following</h2>
          <div className="space-y-6">
            {allBlogs.length > 0 ? allBlogs.map((blog, index) => {
              const isStatic = index < staticBlogs.length;
              return (
                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                  <img src={blog.image} alt={blog.title} className="w-40 h-40" />
                  <p className="text-gray-600">{blog.description}</p>
                  <p className="text-gray-600">{blog.content}</p>

                  <div className="flex justify-between mt-4">
                    <div className="flex space-x-2">
                      <Link 
                        to={`/blog/${index + 1}`} 
                        target="_blank" 
                        className="text-blue-500"
                        onClick={() => incrementViews(index - staticBlogs.length)} // Increment view when clicked
                      >
                        Read More
                      </Link>
                      {isStatic ? null : (
                        <button 
                          className="text-red-500 flex items-center" 
                          onClick={() => deleteBlog(index - staticBlogs.length)} 
                        >
                          <Trash size={16} className="mr-1" />
                          Delete
                        </button>
                      )}
                    </div>
                    <div className="flex items-center space-x-4">
                      <button 
                        className="flex items-center text-green-500"
                        onClick={() => incrementLikes(index - staticBlogs.length)}
                      >
                        <ThumbsUp size={16} className="mr-1" />
                        {blog.likes} Likes
                      </button>
                      <button 
                        className="flex items-center text-blue-500"
                        onClick={() => incrementViews(index - staticBlogs.length)}
                      >
                        <Eye size={16} className="mr-1" />
                        {blog.views} Views
                      </button>
                    </div>
                  </div>
                </div>
              );
            }) : (
              <p>No blogs available</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
