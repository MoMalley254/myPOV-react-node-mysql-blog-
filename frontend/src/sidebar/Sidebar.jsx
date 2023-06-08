import "./sidebar.css";
import { motion } from 'framer-motion';
import profilePic from '../assets/images/vader.jpg';
import friendPic from '../assets/images/Palpatine.jpg';
import friendPic2 from '../assets/images/3po.png';
import friendPic3 from '../assets/images/r2d2.jpeg';


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="aboutHead">
            <hr />
            <h4>About Me</h4>
            <hr />
        </div>
      <div className="profileImage">
        <img src={profilePic} alt="" />
      </div>
      <div className="aboutText">
        <div className="bio">
            <h2 className="username">
                <span>Vader Darth</span>
            </h2>
            <p className="bioText">
                <span>Vader, ruler of galaxy</span>
                <span>Jedi Master😫</span>
                <span>@padme🥰</span>
            </p>
        </div>
      </div>
      <div className="followedCategories">
        <p>Tuned to:</p>
        <ul>
            <motion.li className="categoryItem" 
                whileHover={{
                scale: .9,
                backgroundColor: "#fae6c5",
                border: "1px solid red"
              }}
              transition={1000}
            >
                <a href="#">Genocide</a>
            </motion.li>
            <motion.li className="categoryItem" 
                whileHover={{
                scale: .9,
                backgroundColor: "#fae6c5",
                border: "1px solid red"
              }}
              transition={1000}
            >
                <a href="#">High Ground</a>
            </motion.li>
            <motion.li className="categoryItem" 
                whileHover={{
                scale: .9,
                backgroundColor: "#fae6c5",
                border: "1px solid red"
              }}
              transition={1000}
            >
                <a href="#">Jedi Master</a>
            </motion.li>
            <motion.li className="categoryItem" 
                whileHover={{
                scale: .9,
                backgroundColor: "#fae6c5",
                border: "1px solid red"
              }}
              transition={1000}
            >
                <a href="#">The Force</a>
            </motion.li>
            <motion.li className="categoryItem" 
                whileHover={{
                scale: .9,
                backgroundColor: "#fae6c5",
                border: "1px solid red"
              }}
              transition={1000}
            >
                <a href="#">DarkSide</a>
            </motion.li>
            <motion.li className="categoryItem" 
                whileHover={{
                scale: .9,
                backgroundColor: "#fae6c5",
                border: "1px solid red"
              }}
              transition={1000}
            >
                <a href="#">Darth Plagueis</a>
            </motion.li>
        </ul>
      </div>
      <div className="friends">
        <h4 className="sectTitle">
            <span>Best Friends</span>
        </h4>
        <ul className="friendsList">
            <li className="friendItem">
                <a href="#" target="_blank">
                    <img src={friendPic} alt="" className="friendProfile" />
                    <div className="friendInfo">
                        <h5 className="friendName">Palpatine</h5>
                        <p className="friendBio">
                            <span>Just dew it</span>
                        </p>
                    </div>
                </a>
            </li>
            <li className="friendItem">
                <a href="#" target="_blank">
                    <img src={friendPic2} alt="" className="friendProfile" />
                    <div className="friendInfo">
                        <h5 className="friendName">C-3PO</h5>
                        <p className="friendBio">
                            <span>Human Cyborg Relation</span>
                        </p>
                    </div>
                </a>
            </li>
            <li className="friendItem">
                <a href="#" target="_blank">
                    <img src={friendPic3} alt="" className="friendProfile" />
                    <div className="friendInfo">
                        <h5 className="friendName">R2-D2</h5>
                        <p className="friendBio">
                            <span>Astromechs Rock</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
      </div>
    </div>
  )
}
