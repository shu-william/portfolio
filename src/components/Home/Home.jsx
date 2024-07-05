import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./Home.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ["W", "i", "l", "l", "i", "a", "m", " ", "S", "h", "u", "."];

  // useEffect causes site to break, look into debugging later
  // useEffect(() => {
  //   return setTimeout(() => {
  //     // setLetterClass('text-animate-hover')
  //     console.log("Timeout set")
  //   }, 4000)
  // }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> my name is <br />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
        <h2>Full Stack Developer / Game Designer</h2>
        <Link to="/contact" className="flat-button">Contact Me</Link>
      </div>
    </div>
  )
}

export default Home
