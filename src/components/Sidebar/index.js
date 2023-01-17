import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoM from '../../assets/images/logo-m.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import {faUser } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoM} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="Muneeb" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            
        </nav>
        <ul>
            {/* Links to Socials */}
            <li>
                <a 
                target="blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/muneeb-farrukh-84a9b71b2/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#fff" />
                </a>
            </li>
            <li>
                <a 
                target="blank"
                rel="noreferrer"
                href="https://github.com/Muneeb-F"
                >
                    <FontAwesomeIcon icon={faGithub} color="#fff" />
                </a>
            </li>

        </ul>

    </div>
)
 
export default Sidebar;