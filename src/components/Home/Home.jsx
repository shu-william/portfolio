import React from 'react'
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> my name is William Shu.
        </h1>
        <h2>Full Stack Developer / Game Designer</h2>
        <Link to="/contact" className="flat-button">Contact Me</Link>
      </div>
    </div>
  )
}

export default Home
