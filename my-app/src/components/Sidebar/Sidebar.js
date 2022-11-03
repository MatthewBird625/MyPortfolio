import './Sidebar.scss';
import logo from '../../assets/images/favicon.ico';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4f" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4f" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4f" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreffer"
            href="https://www.linkedin.com/in/matthew-bird-96363313a/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreffer" href="https://github.com/">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
