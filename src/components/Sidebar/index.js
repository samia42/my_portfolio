import React from 'react'
import "./index.scss"
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from "../../assets/images/samia_transperent_bg_logo.png"
import { Link, } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/" >
      <img src={LogoS} alt="logo"/>
      <img className="sub-logo" src={LogoSubtitle} alt="logo" />
    </Link>
    <nav>
      <Link exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
      </Link>
      <Link exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </Link>
      <Link exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </Link>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/samia-saif-8a9019176/'>
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href='https://github.com/samia42'>
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href='https://join.skype.com/invite/wFLfed7RBHRK'>
          <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
        </a>
      </li>
    </ul>

  </div>
)


export default Sidebar