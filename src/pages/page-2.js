import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import introcube from "../images/intro-cube.png"
import introcubes from "../images/intro-cubes.png"
import introstairs from "../images/intro-stairs.png"
import intropillar from "../images/intro-pillar.png"
import introphone from "../images/intro-phone.png"
import HeaderFooter from "../components/headerFooter"
import Header from "../components/header"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" /> 
    <Header/> 
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Cash</h1>
        <img className="CashApp"  src={introphone} alt="Cash App" />
        <h1>App</h1>
      </div>
      <div className="CubeGroup">
        <img className="Cube" src={introcube} alt="Cube" />
        <img className="Stairs" src={introstairs} alt="Stairs" />
        <img className="Cubes" src={introcubes} alt="Cubes" />
        <img className="Pillar" src={intropillar} alt="Pillar" />
      </div>
      <HeaderFooter />
    </div>
   
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
