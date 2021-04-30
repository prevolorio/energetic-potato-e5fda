import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import validation from 'utils/validation';

const Contact = ({ contentModuleId }) => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutContact {
                edges {
                    node {
                        id
                        heading
                        description {
                            description
                        },
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

    const content = data.allContentfulLayoutContact.edges.find(edge => edge.node.id === contentModuleId);

    useEffect(() => {
        validation.init();
    },[]);

    return (
        <section id="contact" className="contact container section mx-auto">
            <div className="contact__content">
                <h2 className="section__title" data-sal="fade" data-sal-easing="ease-in-cubic">{ content.node.heading }</h2>
                <p className="mb-4 w-full md:w-3/4" data-sal="slide-up" data-sal-easing="ease-in-cubic">{ content.node.description.description }</p>
                <form id="contact_form" data-netlify="true" data-netlify-honeypot="bts-field" className="w-full md:w-3/4" noValidate data-sal="slide-up" data-sal-easing="ease-in-cubic" data-sal-delay="100">
                    <input type="hidden" name="bot-field" />
                    <div className="input-group mb-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="input" name="name" />
                    </div>
                    <div className="input-group mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="input" name="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className="h-20" name="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn--primary mt-8">Send</button>
                </form>
            </div>
            <div className="contact__image">
                <div className="mx-auto" data-sal="slide-up" data-sal-delay="400" data-sal-duration="500">
                    <div className="contact__image-wrap">
                        <Img fluid={ content.node.image.fluid } alt="Contact" />
                    </div>
                </div>
            </div>
            <script><a class="typeform-share button" href="https://form.typeform.com/to/ZynPRwjB?typeform-medium=embed-snippet" data-mode="popover" style="width:54px;height:54px;position:fixed;box-shadow:0px 2px 12px rgba(0, 0, 0, 0.06), 0px 2px 4px rgba(0, 0, 0, 0.08);right:26px;bottom:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;background:#6C63FF;overflow:hidden;line-height:0;" target="_blank"> <span class="icon"> <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' style="margin-top:6px;"> <path d='M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z' fill='white' /> </svg> </span> </a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script></script>
        </section>   
    );
};

Contact.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Contact;