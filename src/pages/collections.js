import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"


const Collections = ({ data, location }) => {  

  return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div className="body-global-wrapper">
            {/* Group 1 */}
            <div className="collections">
                <h2 className="h2">ЯEDЯUM</h2>
            </div>   
            <div class="container">
                <div class="box">
                {/*  */}
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0010.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />                            
                {/* </div> */}
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0011.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
            </div>
            <div class="container">
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0008.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0009.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    /> 
                </div>
            </div>
            {/* Group 2 */}
            <div className="collections">
                <h2 className="h2">grey&BLONDE</h2>
            </div>
            <div class="container">
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0015.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />   
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0016.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0017.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0018.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
            </div>
            <div class="container">
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0019.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0020.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
            </div>
            {/* Group 3 */}
            <div className="collections">
                <h2 className="h2">time to feast</h2>
            </div>
            <div class="container">
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0012.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0013.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0014.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
            </div>
            {/* Group 4 */}
            <div className="collections">
                <h2 className="h2">live fast, die young</h2>
            </div>
            <div class="container">
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/25C54BD2-5616-4E7B-ACCF-E0A78E90A6AC.JPG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />   
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/78527DCF-D4C8-44C5-823E-A933DE3FADE5.JPG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_7333_polarr.JPEG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />   
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_7588_polarr.JPEG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />   
                </div>
            </div>
            {/* Group 5 */}
            <div className="collections">
                <h2 className="h2">kiinky boots</h2>
            </div>
            <div class="container">
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0021.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />    
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0022.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    /> 
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0023.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0024.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />   
                </div>
            </div>
            {/* Group 6 */}
            <div className="collections">
                <h2 className="h2">moment</h2>
            </div>
            <div class="container">
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_1214_polarr.JPEG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_3529_polarr.JPEG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />   
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_5208_polarr.JPEG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    /> 
                </div>
            </div>
            <div class="container">
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0025.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    /> 
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0026.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
            </div>
            {/* Group 7 */}
            <div className="collections">
                <h2 className="h2">ace</h2>
            </div>
            <div class="container">
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_0004_polarr.JPEG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_8256_polarr.JPEG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_8385_polarr.JPEG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
            </div>
            <div class="container">
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_2892_polarr.JPEG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />   
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_6417_polarr.JPEG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
            </div>
            {/* Group 8 */}
            <div className="collections">
                <h2 className="h2">the girl in red</h2>
            </div>
            <div class="container">
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/40B54A0B-8F01-49DF-9D11-0719309A5839.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/cpm35 2024-02-07 152846.315.JPG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/60717A89-2398-4AC8-AB18-DDA1CCAD7592.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />   
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/cpm35 2024-02-07 152927.369.JPG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
            </div>
            {/* Group 9 */}
            <div className="collections">
                <h2 className="h2">sweet dreams</h2>
            </div>
            <div class="container">
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_8863.JPG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_8865.JPG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_9057.JPG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
            </div>
            {/* Group 10 */}
            <div className="collections">
                <h2 className="h2">the queen is never late, everyone is simply early</h2>
            </div>
            <div class="container">
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/6C9FA638-42BC-41FF-9AAC-F7F4AA7335FF.JPG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/69EAF94F-7E9B-487A-9320-F3921F6EF41F.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />    
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/D670705B-3730-4A2B-90BF-4BB615A9B1F5.JPG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_9651_polarr.JPEG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
            </div>
            {/* Group 11 */}
            <div className="collections">
                <h2 className="h2">its her world we're living in</h2>
            </div>
            <div class="container">
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_9109.JPG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_9112.JPG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_9113.JPG"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
            </div>
            {/* Group 12 */}
            <div className="collections">
                <h2 className="h2">texas hold'em</h2>
            </div>
            <div class="container">
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_1496.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_1497.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />   
                </div>
                <div class="box">
                
                    <StaticImage 
                    layout="constrained"
                    src="../images/PORTFOLIO/IMG_1500.jpg"
                    alt="Header picture"
                    backgroundColor="transparent"
                    placeholder="none"                                    
                    quality={95}
                    transformOptions={{fit: "fill"}}                                                                    
                    />  
                </div>
            </div>
        </div>
        <div>
          <Footer></Footer>
        </div>        
      </div>    
  )
}

export default Collections

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Collections" />

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
