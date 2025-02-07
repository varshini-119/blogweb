import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Share2, Eye, ThumbsUp } from "lucide-react";

const blogsByCategory = {
  arts: [
    {
      title: "The Evolution of Modern Art",
      content: "Modern art has evolved significantly over the years, with many movements influencing its direction...",
      image: "https://th.bing.com/th?id=OSK.u8JBQKtBSBMNmEaHYa43F-qGqyCmqBnH79dEuqfhgdw&w=224&h=200&c=12&rs=1&o=6&pid=SANGAM",
      views: 234,
      likes: 124,
    },
    {
      title: "Exploring the World of Abstract Art",
      content: "Abstract art has no boundaries and embraces freedom of expression...",
      image: "https://th.bing.com/th/id/OIP.wRNpBdQuaIGBsjcO8u4t9gHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7",
      views: 180,
      likes: 98,
    },
  ],
  science: [
    {
      title: "The Wonders of Quantum Mechanics",
      content: "Quantum mechanics is a branch of physics that explains the behavior of matter and energy on extremely small scales...",
      image: "https://api.deepai.org/job-view-file/89578bd3-41ad-4093-a475-c3aca3840df9/outputs/output.jpg",
      views: 400,
      likes: 210,
    },
    {
      title: "Understanding Genetic Engineering",
      content: "Genetic engineering is revolutionizing medicine, agriculture, and the environment...",
      image: "https://api.deepai.org/job-view-file/bf265dbf-71eb-470f-b24f-a2ef344ae220/outputs/output.jpg",
      views: 350,
      likes: 180,
    },
  ],
  technology: [
    {
      title: "Understanding React Hooks",
      content: "React Hooks provide a powerful way to use state and lifecycle features in functional components...",
      image: "https://api.deepai.org/job-view-file/62f9c710-a80b-4c0d-899f-b4062a81dd33/outputs/output.jpg",
      views: 500,
      likes: 300,
    },
    {
      title: "How to Optimize Performance in React",
      content: "Performance optimization is crucial for a seamless user experience in React applications...",
      image: "https://api.deepai.org/job-view-file/814815ed-b9b5-40d4-b65f-80adb29f6611/outputs/output.jpg",
      views: 450,
      likes: 275,
    },
  ],
  health: [
    {
      title: "Maintaining Mental Health",
      content: "Mental health is just as important as physical health, and maintaining it is essential for overall well-being...",
      image: "https://api.deepai.org/job-view-file/4cd789a2-6976-41a7-a241-d7cc8672b591/outputs/output.jpg",
      views: 320,
      likes: 200,
    },
    {
      title: "The Benefits of Regular Exercise",
      content: "Exercise has numerous benefits, including improved cardiovascular health, mental well-being, and longevity...",
      image: "https://api.deepai.org/job-view-file/13ddf361-88e8-464a-b8bd-0c7d3f018cfd/outputs/output.jpg",
      views: 410,
      likes: 270,
    },
  ],
  music: [
    {
      title: "The Evolution of Jazz Music",
      content: "Jazz music has a rich history that spans over a century, evolving with new rhythms and instruments...",
      image: "https://api.deepai.org/job-view-file/a6764509-145d-4d07-8b40-8ced16bf3e4d/outputs/output.jpg",
      views: 250,
      likes: 150,
    },
    {
      title: "Top 10 Rock Bands of All Time",
      content: "Rock music has produced some of the greatest bands in history. From the Beatles to Led Zeppelin...",
      image: "https://api.deepai.org/job-view-file/17366a98-aa0c-4805-a07a-710fc2f20599/outputs/output.jpg",
      views: 320,
      likes: 200,
    },
  ],
  lifestyle: [
    {
      title: "How to Live a Minimalist Lifestyle",
      content: "Minimalism is about simplifying life and finding happiness in less. Here's how you can embrace minimalism...",
      image: "https://api.deepai.org/job-view-file/4ef85196-f8e9-4be6-83c3-9ced1682cb14/outputs/output.jpg",
      views: 310,
      likes: 180,
    },
    {
      title: "The Benefits of a Healthy Morning Routine",
      content: "A good morning routine sets the tone for the entire day. Here are some tips to build a healthy morning ritual...",
      image: "https://api.deepai.org/job-view-file/941ee00d-da9c-4475-9ccd-30805898c6c9/outputs/output.jpg",
      views: 275,
      likes: 150,
    },
  ],
  food: [
    {
      title: "5 Easy Vegan Recipes to Try Today",
      content: "Looking for some delicious and healthy vegan meals? Here are five easy recipes to make at home...",
      image: "https://api.deepai.org/job-view-file/4189b8ec-582a-4378-b853-98c7bf10b213/outputs/output.jpg",
      views: 420,
      likes: 300,
    },
    {
      title: "The Best Street Foods Around the World",
      content: "From tacos to satay, street food is a culinary adventure. Check out some of the best street foods from around the world...",
      image: "https://api.deepai.org/job-view-file/3c49c194-2865-4cda-9641-cbd4050584f0/outputs/output.jpg",
      views: 380,
      likes: 230,
    },
  ],
  travel: [
    {
      title: "Top 10 Destinations to Visit in 2025",
      content: "Ready to plan your next trip? Here are the top 10 travel destinations you should visit in 2025...",
      image: "https://api.deepai.org/job-view-file/b0af55a0-7658-4f93-99f4-4884fc1e734f/outputs/output.jpg",
      views: 550,
      likes: 350,
    },
    {
      title: "A Guide to Backpacking Through Europe",
      content: "Backpacking through Europe can be one of the most rewarding travel experiences. Here’s everything you need to know...",
      image: "https://api.deepai.org/job-view-file/4fb2b224-fd61-4189-bf69-36ae1c1c4579/outputs/output.jpg",
      views: 460,
      likes: 300,
    },
  ],
};

const BlogList = ({ category }) => {
  const blogs = blogsByCategory[category] || [];

  return (
    <motion.div className="p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold mb-4">
        {category.charAt(0).toUpperCase() + category.slice(1)} Blogs
      </h1>
      <div className="grid gap-4 md:grid-cols-2">
        {blogs.map((blog) => (
          <Card key={blog.id} className="p-4 shadow-lg">
            <img src={blog.image} alt={blog.title} className="rounded-lg h-auto w-40" />
            <CardContent>
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-sm">{blog.content.substring(0, 50)}...</p>
              <div className="flex justify-between mt-2">
                <Link  className="text-blue-500">
                  Read More
                </Link>
                <div className="flex space-x-2">
                  <Button >
                    <Eye size={16} />
                    {blog.views}
                  </Button>
                  <Button>
                    <ThumbsUp size={16} />
                    {blog.likes}
                  </Button>
                  <Button>
                    <Share2 size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogList;
