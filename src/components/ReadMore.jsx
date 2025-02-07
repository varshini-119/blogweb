import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ReadMore = () => {
  const { index } = useParams(); // To get the index from the URL
  const navigate = useNavigate();
  
  const [blog, setBlog] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const allBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blogData = allBlogs[parseInt(index, 10)];

    // If blog is found, increment views
    if (blogData) {
      blogData.views += 1;
      setBlog(blogData);

      // Save the updated view count back to localStorage
      allBlogs[parseInt(index, 10)] = blogData;
      localStorage.setItem('blogs', JSON.stringify(allBlogs));
    }
  }, [index]);

  const handleLike = () => {
    if (blog) {
      const updatedBlog = { ...blog, likes: blog.likes + 1 };
      setBlog(updatedBlog);
      setIsLiked(true);

      // Update the likes in localStorage
      const allBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
      allBlogs[parseInt(index, 10)] = updatedBlog;
      localStorage.setItem('blogs', JSON.stringify(allBlogs));
    }
  };

  return (
    blog ? (
      <div className="max-w-2xl mx-auto my-10 p-6 border rounded-md shadow-lg">
        <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
        <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover rounded-md mb-4" />
        <p className="text-lg mb-4">{blog.content}</p>
        <p className="text-gray-600 mb-2">Views: {blog.views}</p>
        <p className="text-gray-600 mb-4">Likes: {blog.likes}</p>

        <button
          onClick={handleLike}
          className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 ${isLiked ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLiked}
        >
          {isLiked ? 'Liked' : 'Like'}
        </button>
        <button
          onClick={() => navigate('/')}
          className="ml-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-400"
        >
          Back to Home
        </button>
      </div>
    ) : (
      <p>Blog not found!</p>
    )
  );
};

export default ReadMore;
