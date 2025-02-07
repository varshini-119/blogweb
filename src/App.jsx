import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import BlogDetail from './components/BlogDetail'; 
import AddBlog from "./pages/AddBlog";
import ReadMore from "./components/ReadMore";
const App = () => (
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/blog/:index" element={<ReadMore />} />
      <Route path="/addblog" element={<AddBlog/>}/>
    </Routes>
  </Router>
);

export default App;
