import { useParams } from "react-router-dom";
import { Eye, ThumbsUp, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { id } = useParams();

  const blogDetails = {
    1: {
      title: "The Science of Innovation",
      content: "A deep dive into the latest technological advancements and their impact on our daily lives. In this article, we will explore various innovations.A deep dive into the latest technological advancements and their impact on our daily lives reveals how rapidly evolving innovations are reshaping how we work, interact, and live. In this article, we will explore various breakthroughs across industries like artificial intelligence (AI), biotechnology, renewable energy, and quantum computing, among others. From AI-powered virtual assistants revolutionizing the way we organize our schedules to biotechnology advancements that are extending human lifespans, these technologies are increasingly embedded in every aspect of our daily routines. Furthermore, smart home devices have redefined convenience, while electric vehicles (EVs) are gradually transforming the transportation landscape, reducing emissions, and promoting sustainability. We'll also take a closer look at how augmented and virtual reality (AR/VR) are changing entertainment and education, creating immersive learning experiences and new forms of interactive media. With the rise of automation and robotics, the workforce is also being affected, leading to shifts in labor demands and the nature of jobs. Finally, the development of 5G networks is paving the way for faster communication, facilitating the growth of the Internet of Things (IoT) and connecting everything from household appliances to medical devices. These technological advances not only promise enhanced efficiency and convenience but also raise questions about privacy, security, and the ethical implications of their widespread use.",
      image: "https://cdn.gencraft.com/prod/user/ba31788e-4880-47e5-8de5-37acc97e6613/3c181c44-eb52-4aca-bd54-8cb9b294e2a5/image/image1_0.jpg?Expires=1738775657&Signature=XibX7L4BzrKumfhriqqjmXDiLTirmlHm2CLExgptUVpxQ6v~5l89CPUe3BffKByCI-o9Xuxt5Kv6Q1dJQVReprrxx-GeOHiLLnDOno-m7l9T2t15rdsrT~-~XoiJ2ID9szPJOJnRhNVL3tFbdywOn-i-kF3BQ56G~PrjMZiWMkPrzMu0oKtjrUHPoVaaiU~HOn~OfAEaMKLfxt6iuBh19xdApK5DwbQADk~H0fAaJ7bzGvg3p7UBfS31zLPNl~gMlaKApGqYpUOKyyevAwb-MhpefwCIyGQ81x9IIJdmXvE78lQ-6EdEgV0NK5iMWcJxbp8-2xW5ACd7-fzJt2r~-g__&Key-Pair-Id=K3RDDB1TZ8BHT8",
      views: 250,
      likes: 150,
      extraContent: "This section covers in-depth how these technological innovations will change our future, focusing on advancements in AI, robotics, and the Internet of Things (IoT)."
    },
    2: {
      title: "Artistic Expressions",
      content: "Exploring the beauty of creative arts and how they shape our culture and society. Art has always been a mirror of our civilization's evolution.Exploring the beauty of creative arts and how they shape our culture and society reveals the profound impact that artistic expression has on the world around us. Art has always been a mirror of our civilization's evolution, reflecting the triumphs, struggles, and aspirations of the people who create it. From cave paintings to contemporary digital art, creative works offer a window into the values, beliefs, and experiences of different cultures throughout history. These artistic expressions not only preserve our heritage but also challenge societal norms, pushing boundaries and inspiring change. Through literature, music, painting, sculpture, and performance, the creative arts provide a platform for individuals to share their personal stories and collective experiences, fostering empathy and understanding. The arts also serve as a powerful tool for social and political commentary, addressing issues such as inequality, human rights, and environmental concerns. Moreover, the evolution of artistic forms and mediums continues to shape the way we communicate and interact with each other in an increasingly interconnected world. By engaging with the arts, we not only gain insight into different perspectives but also contribute to the ongoing dialogue that shapes our culture and identity. Ultimately, the beauty of creative arts lies in their ability to inspire, provoke thought, and connect us to the deeper aspects of the human experience.",
      image: "https://cdn.gencraft.com/prod/user/ba31788e-4880-47e5-8de5-37acc97e6613/97d7d550-5c5a-4663-a947-adffc049467b/image/image0_0.jpg?Expires=1738776101&Signature=IM4kopb~YXaZrBzrB39lskZPDnvFBtQxYdYDK1sbtVPYi9dF3yVt7Fdyo4coRKwdLnI4IYd-zTZ98fL~BNKNVdgcvzEFze~ciMUPtoYMPPLIdLbgvFuCIjjygNJdV~UrsSgkwaYYsDK9Tasyolo7bappzC2bQ9il~G8CNMRP3XBq7IYo-DWKToGNr8pZySM~GGaBdtJwC4P43Bi8fnEXyDC9MIwOMtXWH4DLtwNbwc1M82cnNHIVOFs6N5ZykufkYbp0ZpITNbGLtWI7vjyo7JPv5yxg5~Mzj33pgMBByAE14WZA3vkIO-Dlfr0qqkyBTSaS51LIfrw6yF615VkRLA__&Key-Pair-Id=K3RDDB1TZ8BHT8",
      views: 320,
      likes: 200,
      extraContent: "In this section, we dive deeper into specific art forms like painting, sculpture, and modern digital arts that are influencing today's culture."
    },
    3: {
      title: "Health and Wellness",
      content: "Tips on maintaining physical and mental health through mindful living and exercise. It's important to strike a balance between body and mind.Maintaining physical and mental health through mindful living and exercise is essential for overall well-being. It's important to strike a balance between body and mind, as both are interconnected in promoting a healthy lifestyle. Regular physical activity, such as walking, yoga, or strength training, not only strengthens the body but also reduces stress and improves mood. Practicing mindfulness techniques like meditation or deep breathing can help manage anxiety, enhance focus, and improve emotional resilience. Eating a balanced diet and staying hydrated further supports both physical health and mental clarity. Setting aside time for rest and self-care is equally crucial, allowing the body and mind to recharge. By integrating mindful habits and regular exercise into daily life, we cultivate a sense of harmony that boosts both mental and physical vitality.",
      image: "https://th.bing.com/th/id/OIP.p05fkUSoAv8Q44OYbEaGsAHaHa?w=160&h=180&c=7&r=0&o=5&pid=1.7",
      views: 410,
      likes: 230,
      extraContent: "Learn about the various exercises and mental health techniques that can help you achieve a better work-life balance and holistic well-being."
    },
    4: {
      title: "Business Trends",
      content: "Insights into the latest trends in the business world and tips for aspiring entrepreneurs. The business world is constantly evolving with new trends.The business world is constantly evolving with new trends that shape how companies operate and succeed. From the rise of remote work and digital transformation to the growing importance of sustainability and ethical practices, today's entrepreneurs must stay agile to stay ahead. Embracing technology, such as AI, automation, and e-commerce, can help streamline operations and reach broader markets. Additionally, there is a growing demand for businesses that prioritize social responsibility and environmental impact, making conscious consumerism a significant driver. Aspiring entrepreneurs should focus on adaptability, continuous learning, and building a strong network to thrive in this dynamic environment. Cultivating a growth mindset and staying innovative are key to overcoming challenges and seizing new opportunities in a fast-changing landscape.",
      image: "https://th.bing.com/th/id/OIP.cPYP4UOub0tBl7YmVAQI_gHaE8?w=284&h=189&c=7&r=0&o=5&pid=1.7",
      views: 320,
      likes: 180,
      extraContent: "This section will cover important trends like sustainability in business, remote work, and the rise of social entrepreneurship."
    }
  };

  const blog = blogDetails[id];

  if (!blog) return <div>Blog not found</div>;

  return (
    <motion.div className="p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{blog.title}</h2>
        <img src={blog.image} alt={blog.title} className="rounded-lg mb-4 h-auto object-cover w-40" />
        <p className="text-gray-600 mb-4">{blog.content}</p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Additional Insights</h3>
        <p className="text-gray-600">{blog.extraContent}</p>
        
        <div className="flex justify-between mt-6">
          <div className="flex space-x-2">
            <button className="flex items-center text-gray-600">
              <Eye size={16} className="mr-1" /> {blog.views}
            </button>
            <button className="flex items-center text-gray-600">
              <ThumbsUp size={16} className="mr-1" /> {blog.likes}
            </button>
            <button className="flex items-center text-gray-600">
              <Share2 size={16} />
            </button>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Related Articles</h3>
        <ul className="list-disc pl-6 text-gray-600">
          <li><a href="/blog/2" className="text-blue-500">Exploring the Role of Art in Society</a></li>
          <li><a href="/blog/3" className="text-blue-500">Tips for Improving Your Mental Health</a></li>
          <li><a href="/blog/4" className="text-blue-500">Current Business Trends to Watch</a></li>
        </ul>
      </div>
    </motion.div>
  );
};

export default BlogDetail;