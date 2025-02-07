import { useParams } from "react-router-dom";
import BlogList from "../components/BlogList";

const CategoryPage = () => {
  const { category } = useParams(); 

  return (
    <div className="p-6">
      <BlogList category={category} />
    </div>
  );
};

export default CategoryPage;
