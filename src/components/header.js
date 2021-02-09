import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//Importing Assets
import logo from "../images/logo.png"
import eye from "../images/eye.png"
import './header.css'

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="HeaderGroup">
      <div className="Logo">
        <Link to="/"><img src={logo} width="30" alt=" " /></Link>
      </div>
      <div className="NavLinks">
        <Link to="/courses">Sign In</Link>
        <Link to="/downloads">Legal</Link>
        <Link to="/workshops">Licenses</Link>
        <Link to="/workshops">Security</Link>
        <Link to="/workshops">Careers</Link>
        <Link to="/workshops">Press</Link>
        <Link to="/workshops">Support</Link>
        <Link to="/workshops">Status</Link>
        <Link to="/workshops">Codeblog</Link>
      </div>
       <div className="CTA">
        <Link to="/"><img src={eye} width="64px" alt=" " /></Link>
       </div> 
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
