import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import LandingPage from "./pages/test/LandingPage.jsx";
import WriteBlog from "./pages/write/WriteBlog.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Profile from "./pages/profile/Profile.jsx";
import EditBlogs from "./pages/editBlogs/EditBlogs.jsx";
import { AuthProvider } from "./context/authContext.jsx";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<WriteBlog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit/:id" element={<EditBlogs />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
