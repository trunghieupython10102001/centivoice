import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import TemplatePage from "./pages/TemplatePage/TemplatePage";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import ActivitiesPage from "./pages/ActivitiesPage/ActivitiesPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import UserProfile from "./pages/UserProfilePage/UserProfile";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="template" element={<TemplatePage />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
