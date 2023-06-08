import "./header.css";
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <div className="belowNav">
          <div className="searchBar input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping"><i className="bi bi-search"></i></span> 
              <input type="text" name="searchBar" id="searchBar" className="form-control"  />
          </div>
    
          <div className="categories">
            <ul className="categoriesList">
              <motion.li className="category" 
              whileHover={{
                scale: 1.1,
                backgroundColor: "#fae6c5",
              }}>
                <a href="#">
                  <span>Something</span>
                </a>
              </motion.li>
              <motion.li className="category" 
              whileHover={{
                scale: 1.1,
                backgroundColor: "#fae6c5",
              }}>
                <a href="#">
                  <span>Something</span>
                </a>
              </motion.li>
              <motion.li className="category" 
              whileHover={{
                scale: 1.1,
                backgroundColor: "#fae6c5",
              }}>
                <a href="#">
                  <span>Something</span>
                </a>
              </motion.li>
              <motion.li className="category" 
              whileHover={{
                scale: 1.1,
                backgroundColor: "#fae6c5",
              }}>
                <a href="#">
                  <span>Something</span>
                </a>
              </motion.li>
              <motion.li className="category" 
              whileHover={{
                scale: 1.1,
                backgroundColor: "#fae6c5",
              }}>
                <a href="#">
                  <span>Something</span>
                </a>
              </motion.li>
              <motion.li className="category" 
              whileHover={{
                scale: 1.1,
                backgroundColor: "#fae6c5",
              }}>
                <a href="#">
                  <span>Something</span>
                </a>
              </motion.li>
              <motion.li className="category" 
              whileHover={{
                scale: 1.1,
                backgroundColor: "#fae6c5",
              }}>
                <a href="#">
                  <span>Something</span>
                </a>
              </motion.li>
              <motion.li className="category" 
              whileHover={{
                scale: 1.1,
                backgroundColor: "#fae6c5",
              }}>
                <a href="#">
                  <span>Something</span>
                </a>
              </motion.li>
              
            </ul>
          </div>
        </div>
      )
}
