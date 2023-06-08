import React, {useState} from 'react';
import { motion } from 'framer-motion';
import './navBar.css';

export default function NavBar() {
  return (
    <div className="topbar">
      <div className="navBar">
        <NavLeft />
        <NavCenter />
        <NavRight />
      </div>
    </div>
    
  );
}

function NavLeft() {
  return (
    <div className="navLeft">
      <ul className="navLeftLinks">
        <li className="navLeftLink">
          <motion.a
            href="/"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#e8d3bc",
              padding: "5px",
              borderRadius: "5px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 200,
              },
            }}
          >
            <i className="bi bi-house-heart-fill"></i>
            <span>Home</span>
          </motion.a>
        </li>
        <li className="navLeftLink">
          <motion.a
            href="/taste"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#e8d3bc",
              padding: "5px",
              borderRadius: "5px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 200,
              },
            }}
          >
            <i className="bi bi-emoji-heart-eyes-fill"></i>
            <span>My Taste</span>
          </motion.a>
        </li>
        <li className="navLeftLink">
          <motion.a
            href="/trending"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#e8d3bc",
              padding: "5px",
              borderRadius: "5px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 200,
              },
            }}
          >
            <i className="bi bi-fire"></i>
            <span>Trending</span>
          </motion.a>
        </li>
      </ul>
    </div>
  );
}

function NavCenter() {
  return (
    <div className="navCenter">
      <motion.a href="/">
        <h2 className="logoName">myPOV</h2>
      </motion.a>
    </div>
  );
}

function NavRight() {
  return (
    <div className="navRight">
      <ul className="navRightLinks">
        <li className="navRightLink">
          <motion.a
            href="/new"
            target="_blank"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#e8d3bc",
              padding: "5px",
              borderRadius: "5px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 200,
              },
            }}
          >
            <i className="bi bi-bookmark-heart-fill"></i>
            <span>New POV</span>
          </motion.a>
        </li>
        <li className="navRightLink">
          <motion.a
            href="/profile"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#e8d3bc",
              padding: "5px",
              borderRadius: "5px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 200,
              },
            }}
          >
            <i className="bi bi-person-hearts"></i>
            <span>Profile</span>
          </motion.a>
        </li>
      </ul>
    </div>
  );
}

// function BelowNav () {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleHover = () => {
//     setIsHovered(true);
//     console.log('hovered');

//   } 
  
// }
