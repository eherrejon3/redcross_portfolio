/* Create Body component using react, it's a responsive body, with 2 columns */
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Body = () => {
    const data = useStaticQuery(graphql`
        query BodyQuery {
        site {
            siteMetadata {
            author {
                name
                summary
            }
            social {
                twitter
            }
            }
        }
        }
    `)
    
    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author
    const social = data.site.siteMetadata?.social
    
    return (
        <div>
        <div class="custom-shape-divider-top-1710788552">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
            </svg>
        </div>
            <div  className="body-global-wrapper">
                
                <div className="row column">
                    <div className="image-container titleimage">
                        <StaticImage 
                                    layout="constrained"
                                    src="../images/PORTFOLIO/redcross_title.png"
                                    alt="Header picture"
                                    backgroundColor="transparent"
                                    placeholder="none"                                    
                                    quality={95}
                                    transformOptions={{fit: "fill"}}                                                                    
                        />                            
                    </div>
                </div>                    
                <br></br>
                <div className="row">
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/PORTFOLIO/IMG_0009.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/PORTFOLIO/IMG_0010.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                                />
                        </div>                        
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/PORTFOLIO/IMG_0015.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/PORTFOLIO/IMG_0020.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                                />
                        </div>                        
                    </div>
                </div>                                                                     
                <div className="row">
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/PORTFOLIO/IMG_0022.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/PORTFOLIO/IMG_0025.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                                />
                        </div>                        
                    </div>
                </div>                                                                     
                <div className="row">
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/PORTFOLIO/IMG_1497.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/PORTFOLIO/IMG_7588_polarr.JPEG"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                                />
                        </div>                        
                    </div>
                </div>                                                                     
                <div className="row">
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/PORTFOLIO/IMG_8863.JPG"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/PORTFOLIO/IMG_9112.JPG"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                                />
                        </div>                        
                    </div>
                </div>                                                                     
                <div className="row">
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/PORTFOLIO/6C9FA638-42BC-41FF-9AAC-F7F4AA7335FF.JPG"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/PORTFOLIO/IMG_0004_polarr.JPEG"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                                />
                        </div>                        
                    </div>
                </div>                                                                                    
            </div> 
            <div  className="footer-body">
                <h6>Built with 🖤 by <a href="https://github.com/eherrejon3">Elizabeth Herrejon</a></h6>
            </div>
        </div>
    )
}

export default Body
