import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandPage from "./pages/LandPage";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./CSS/landing.css";
import "./CSS/login.css";
import "./CSS/profile.css";
import "./CSS/SignUp.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<LandPage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="/signUp" element={<SignUp />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
