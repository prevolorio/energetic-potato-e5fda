import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const Hero = ({ contentModuleId }) => {
    
    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutHero {
                edges {
                    node {
                        id
                        heading
                        subheading
                        description {
                            description
                        }
                        ctaText
                        ctaUrl
                        image {
                            fluid(quality: 100) {
                                ...GatsbyContentfulFluid
                            }
                        }
                    }
                }
            }
        }
    `);

    const content = data.allContentfulLayoutHero.edges.find(edge => edge.node.id === contentModuleId);

    return (
        <section className="hero container section mx-auto">
            <div className="hero__image md:ml-16" >
                <img src={ content.node.image.fluid.src }  className="mx-auto" alt="Hero" data-sal="slide-right" data-sal-delay="400" data-sal-duration="500" />
            </div>   
            <div className="hero__tagline md:ml-8">
                <div className="hero__tagline-content-wrap">
                    <h2 className="hero__tagline-title" data-sal="fade">{ content.node.heading }</h2>
                    <p className="hero__tagline-subtitle" data-sal="fade" data-sal-delay="100">{ content.node.subheading }</p>
                    <p className="hero__tagline-text" data-sal="fade" data-sal-delay="200">{ content.node.description.description }</p>
                    <a href={ content.node.ctaUrl }><button className="btn btn--primary mt-8" data-sal="fade" data-sal-delay="300">{ content.node.ctaText }</button></a>
                </div>
            </div>
     
        </section>
    );
};

Hero.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Hero;