import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Components/AdminDashboard/Admin/Admin";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard/AdminDashboard";
import AuthProvider from "./Components/Contexts/AuthProvider/AuthProvider";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Blog from "./Components/Pages/Blog/Blog";
import BlogDetails from "./Components/Pages/Blog/BlogDetails";
import BlogUploadForm from "./Components/Pages/Blog/BlogUploadForm";
import Home from "./Components/Pages/Home/Home";
import NextTrip from "./Components/Pages/NextTrip/NextTrip";
import LogIn from "./Components/Shared/LogIn/LogIn";
import UserDashboard from "./Components/UserDashboard/UserDashboard/UserDashboard";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Home />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route index element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/next-trip" element={<NextTrip />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/write-blog" element={<BlogUploadForm />} />
            <Route path="/blog-details/:id" element={<BlogDetails />} />
            <Route path="/admin-panel/*" element={<AdminDashboard />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route
              path="/user-dashboard/user-profile"
              element={<UserDashboard />}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
