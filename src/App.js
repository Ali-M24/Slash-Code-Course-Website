import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Index from "./pages/Index/Index";
import Courses from "./pages/Courses/Courses";
import AboutUs from "./pages/AboutUs/AboutUs";
import Blog from "./pages/Blog/Blog";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" exact index element={<Index />} />
        <Route path="/Courses" exact index element={<Courses />} />
        <Route path="/AboutUs" exact index element={<AboutUs />} />
        <Route path="/Blog" exact index element={<Blog />} />
        <Route path="/Login" exact index element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
