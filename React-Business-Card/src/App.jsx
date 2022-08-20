import React from "react";
import Profile from "./profile.jsx"
import About from "./About.jsx"
import Interests from "./Interests.jsx"
import Footer from "./Footer.jsx"

export default function App() {
    return (
        <div className="container">
            <Profile />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}