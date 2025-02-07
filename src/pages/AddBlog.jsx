// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AddBlog = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [category, setCategory] = useState('');
  
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const blog = { title, content, category };
    
//     let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
//     blogs.push(blog);
//     localStorage.setItem('blogs', JSON.stringify(blogs));

//     navigate('/');
//   };

//   return (
//     <div className="max-w-md mx-auto my-10 p-6 border rounded-md shadow-lg">
//       <h2 className="text-2xl font-bold text-center mb-4">Add New Blog</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-sm font-semibold">Blog Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full p-2 mt-1 border rounded"
//             placeholder="Enter blog title"
//             required
//           />
//         </div>
        
//         <div className="mb-4">
//           <label className="block text-sm font-semibold">Content</label>
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full p-2 mt-1 border rounded"
//             placeholder="Enter blog content"
//             required
//           />
//         </div>
        
        
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400">
//           Add Blog
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddBlog;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(''); // New state for image URL
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, content, category, image }; // Include the image URL

    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));

    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 border rounded-md shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Blog Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mt-1 border rounded"
            placeholder="Enter blog title"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-semibold">Image URL</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 mt-1 border rounded"
            placeholder="Enter image URL"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Blog Description</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 mt-1 border rounded"
            placeholder="Enter blog content"
            required
          />
        </div>
        
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
