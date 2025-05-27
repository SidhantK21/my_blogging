import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LndPg } from "./components/LandingPageComp/LndPg";
import { EditBlog } from "./components/EditBlog";
// import { BlogDetail } from "./components/BlogDetail";
import { WriteBlog } from "./components/WriteBlog";
import BlogPage from "./components/BlogsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LndPg/>}/>
        <Route path="/edit" element={<EditBlog />} />
        <Route path="/write" element={<WriteBlog />} />
        <Route path="/explore" element={< BlogPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
