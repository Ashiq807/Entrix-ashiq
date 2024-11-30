import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faHeart, faFile, faGlobe } from '@fortawesome/free-solid-svg-icons';

import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="recipes"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <FontAwesomeIcon icon={faBookOpen} className="icon" /> Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="favourites"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
             <FontAwesomeIcon icon={faHeart} className="icon" /> Favourites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="courses"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
             <FontAwesomeIcon icon={faFile} className="icon" /> Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="community"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
             <FontAwesomeIcon icon={faGlobe} className="icon" /> Community
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
