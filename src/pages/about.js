import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"


const About = ({ data, location }) => {  

  return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        { !useBreakpoint.xs ? 
        // Mobile View Configuration
        <div className="body-global-wrapper">

          {/* Row 1 */}
          
          <div class="container">
            <div class="box-mobile">
              <div className="titleimage">
                <StaticImage 
                  layout="constrained"
                  src="../images/PORTFOLIO/IMG_0005.jpg"
                  alt="Header picture"
                  backgroundColor="transparent"
                  placeholder="none"                                    
                  quality={95}
                  transformOptions={{fit: "fill"}}                                                                    
                />                            
              </div>
            </div>
          </div>

          {/* Row 2 */}
          
          <div class="container">
            <div class="box-mobile">
              <div className="titleimage">
                <StaticImage 
                  layout="constrained"
                  src="../images/PORTFOLIO/IMG_0002.jpg"
                  alt="Header picture"
                  backgroundColor="transparent"
                  placeholder="none"                                    
                  quality={95}
                  transformOptions={{fit: "fill"}}                                                                    
                />                            
              </div>
            </div>
          </div>

          {/* Row 3 */}
          
          <div class="container">
            <div class="box-mobile">
              <div className="titleimage">
                <StaticImage 
                  layout="constrained"
                  src="../images/PORTFOLIO/IMG_0006.jpg"
                  alt="Header picture"
                  backgroundColor="transparent"
                  placeholder="none"                                    
                  quality={95}
                  transformOptions={{fit: "fill"}}                                                                    
                />                            
              </div>
            </div>
          </div>

          {/* Row 4 */}
          
          <div class="container">
            <div class="box-mobile">
              <div className="titleimage">
                <StaticImage 
                  layout="constrained"
                  src="../images/PORTFOLIO/IMG_0004.jpg"
                  alt="Header picture"
                  backgroundColor="transparent"
                  placeholder="none"                                    
                  quality={95}
                  transformOptions={{fit: "fill"}}                                                                    
                />                            
              </div>
            </div>
          </div>

          {/* Row 5 */}
          <div class="container">
            <div class="box-mobile">
              <div className="titleimage">
                <StaticImage 
                  layout="constrained"
                  src="../images/PORTFOLIO/IMG_0001.jpg"
                  alt="Header picture"
                  backgroundColor="transparent"
                  placeholder="none"                                    
                  quality={95}
                  transformOptions={{fit: "fill"}}                                                                    
                />                            
              </div>
            </div>
          </div>

          {/* Row 6 */}
          <div class="container">
            <div class="box-mobile">
              <div className="titleimage">
                <StaticImage 
                  layout="constrained"
                  src="../images/PORTFOLIO/IMG_0003.jpg"
                  alt="Header picture"
                  backgroundColor="transparent"
                  placeholder="none"                                    
                  quality={95}
                  transformOptions={{fit: "fill"}}                                                                    
                />                            
              </div>
            </div>
          </div>

          {/* Row 7 */}
          <div class="container">
            <div class="box-mobile">
              <div className="titleimage">
                <StaticImage 
                  layout="constrained"
                  src="../images/PORTFOLIO/IMG_0007.jpg"
                  alt="Header picture"
                  backgroundColor="transparent"
                  placeholder="none"                                    
                  quality={95}
                  transformOptions={{fit: "fill"}}                                                                    
                />                            
              </div>
            </div>
          </div>

          <br></br>
          <p className="titleimage">Nací y resido en la ciudad de Mar del Plata, tengo 19 años y estoy incursionando en el mundo de la moda. Soy estudiante de Marketing, y me apasiona la posibilidad de poder conocer nuevas personas, lugares y culturas. 
            <br></br>
            <br></br>
            <u>Measurements:</u>
            <br></br>
            Height: 1.86 m
            <br></br>
            Shoe Size: 42.5
            <br></br>
            <br></br>
            <a href="mailto:mateofernandezrado@gmail.com" target="_blank" rel="noopener noreferrer">Enviame un email</a> para contactarme o escribime por <a href="https://www.instagram.com/mateorado_" target="_blank" rel="noopener noreferrer">Instagram</a>.
          </p>
        </div> :
        // Other View Configuration
        <div className="body-global-wrapper">

          {/* Row 1 */}
          
          <div class="container">
            <div class="box">
              <div className="image-container titleimage">
                <StaticImage 
                  layout="constrained"
                  src="../images/PORTFOLIO/IMG_0005.jpg"
                  alt="Header picture"
                  backgroundColor="transparent"
                  placeholder="none"                                    
                  quality={95}
                  transformOptions={{fit: "fill"}}                                                                    
                />                            
              </div>
            </div>
            <div class="box">
              <div className="image-container titleimage">
                <StaticImage 
                  layout="constrained"
                  src="../images/PORTFOLIO/IMG_0002.jpg"
                  alt="Header picture"
                  backgroundColor="transparent"
                  placeholder="none"                                    
                  quality={95}
                  transformOptions={{fit: "fill"}}                                                                    
                />                            
              </div>
            </div>
            <div class="box">
              <div className="image-container titleimage">
                <StaticImage 
                  layout="constrained"
                  src="../images/PORTFOLIO/IMG_0006.jpg"
                  alt="Header picture"
                  backgroundColor="transparent"
                  placeholder="none"                                    
                  quality={95}
                  transformOptions={{fit: "fill"}}                                                                    
                />                            
              </div>
            </div>
            <div class="box">
              <div className="image-container titleimage">
                <StaticImage 
                  layout="constrained"
                  src="../images/PORTFOLIO/IMG_0004.jpg"
                  alt="Header picture"
                  backgroundColor="transparent"
                  placeholder="none"                                    
                  quality={95}
                  transformOptions={{fit: "fill"}}                                                                    
                />                            
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div class="container">
            <div class="box">
              <div className="image-container titleimage">
                <StaticImage 
                  layout="constrained"
                  src="../images/PORTFOLIO/IMG_0001.jpg"
                  alt="Header picture"
                  backgroundColor="transparent"
                  placeholder="none"                                    
                  quality={95}
                  transformOptions={{fit: "fill"}}                                                                    
                />                            
              </div>
            </div>
            <div class="box">
              <div className="image-container titleimage">
                <StaticImage 
                  layout="constrained"
                  src="../images/PORTFOLIO/IMG_0003.jpg"
                  alt="Header picture"
                  backgroundColor="transparent"
                  placeholder="none"                                    
                  quality={95}
                  transformOptions={{fit: "fill"}}                                                                    
                />                            
              </div>
            </div>
            <div class="box">
              <div className="image-container titleimage">
                <StaticImage 
                  layout="constrained"
                  src="../images/PORTFOLIO/IMG_0007.jpg"
                  alt="Header picture"
                  backgroundColor="transparent"
                  placeholder="none"                                    
                  quality={95}
                  transformOptions={{fit: "fill"}}                                                                    
                />                            
              </div>
            </div>
          </div>

          <br></br>
          <p className="titleimage">Nací y resido en la ciudad de Mar del Plata, tengo 19 años y estoy incursionando en el mundo de la moda. Soy estudiante de Marketing, y me apasiona la posibilidad de poder conocer nuevas personas, lugares y culturas. 
            <br></br>
            <br></br>
            <u>Measurements:</u>
            <br></br>
            Height: 1.86 m
            <br></br>
            Shoe Size: 42.5
            <br></br>
            <br></br>
            <a href="mailto:mateofernandezrado@gmail.com" target="_blank" rel="noopener noreferrer">Enviame un email</a> para contactarme o escribime por <a href="https://www.instagram.com/mateorado_" target="_blank" rel="noopener noreferrer">Instagram</a>.
          </p>
        </div>
        }
        <div>
          <Footer></Footer>
        </div>        
      </div>    
  )
}

export default About

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
