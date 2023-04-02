import { Link, NavLink} from 'react-router-dom'
import { useState } from 'react'
import './index.scss'
import LogoM from '../../assets/images/logo-m.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faSuitcase, faBars, faClose, faFile, faFileLines, faFileAlt, faVcard } from '@fortawesome/free-solid-svg-icons'
import {faUser } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faPage4, faPagelines} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)    




    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoM} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="Muneeb" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon 
                onClick={() => setShowNav(false)}
                icon={faClose}
                color='#ED7D31'
                size="3x"
                className='close-icon'
            />
        </nav>
        <ul>
            {/* Links to Socials */}
            <li className='resume-link'>
                <a 
                onClick={() => setShowNav(false)}
                target="blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1DlFITdznhc9nSAs13_oHR3QfKkzdiOjE/view?usp=share_link">
                    <FontAwesomeIcon icon={faFileLines} color="#fff" />
                </a>
            </li>
            <li>
                <a
                onClick={() => setShowNav(false)}
                target="blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/muneeb-farrukh-84a9b71b2/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#fff" />
                </a>
            </li>
            <li>
                <a 
                onClick={() => setShowNav(false)}
                target="blank"
                rel="noreferrer"
                href="https://github.com/Muneeb-F"
                >
                    <FontAwesomeIcon icon={faGithub} color="#fff" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ED7D31"
            size='3x'
            className='hamburger-icon' 
        />

    </div>
)
}
 
export default Sidebar;