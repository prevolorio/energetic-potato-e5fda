import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = ({ menus }) => {

    const data = useStaticQuery(graphql`
        query {
            contentfulContactDetails {
                id
                addressLine1
                addressLine2
                contactNumber
                email
                facebookUrl
                twitterUrl
                instagramUrl
            }
        }
    `);

    const footerMenu = (menus !== null &&  menus !== undefined) ? menus.find(menu => menu.type === 'secondary') : null;

    return (
        <footer className="footer bg-tertiary text-white">
            <div className="container section mx-auto py-10">
                <div className="footer__content">
                    <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <div className="item">
                                <i className="item__icon material-icons text-white text-2xl">business</i>
                                <div className="item__content">
                                    <p className="item__text">{ data.contentfulContactDetails.addressLine1 }<br/>{ data.contentfulContactDetails.addressLine2 }</p>
                                </div> 
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="item">
                                <i className="item__icon material-icons text-white text-2xl">settings_phone</i>
                                <div className="item__content">
                                    <p className="item__text">{ data.contentfulContactDetails.contactNumber }</p>
                                </div>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="item">
                                <i className="item__icon material-icons text-white text-2xl">email</i>
                                <div className="item__content">
                                    <p className="item__text">{ data.contentfulContactDetails.email }</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {
                    (footerMenu !== null && footerMenu !== undefined) &&
                    <div className="footer__content">
                        <h3 className="text-lg font-bold mb-4">Menu Links</h3>
                        <ul className="text-sm">
                            {
                                footerMenu.menuItems.map(menu => (
                                    <li className="mb-2" key={ menu.id } ><a className="hover:text-primary" href={ menu.url }>{ menu.title }</a></li>
                                ))
                            }
                        </ul>
                    </div>
                }
                {/* <div className="footer__content">
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <ul className="flex text-sm">
                        <li className="mb-2 mr-4">
                            <a href={ data.contentfulContactDetails.facebookUrl }>
                                <img className="w-6 h-6" src={ require('assets/images/facebook.svg') }  alt="Facebook Icon" />
                            </a>
                        </li>
                        <li className="mb-2 mr-4">
                            <a href={ data.contentfulContactDetails.twitterUrl }>
                                <img className="w-6 h-6" src={ require('assets/images/twitter.svg') } alt="Twitter Icon" />
                            </a>
                        </li>
                        <li className="mb-2 mr-4">
                            <a href={ data.contentfulContactDetails.instagramUrl }>
                                <img className="w-6 h-6" src={ require('assets/images/instagram.svg') } alt="Instagram Icon" />
                            </a>
                        </li>
                    </ul>
                </div> */}
                <a class="typeform-share button" href="https://form.typeform.com/to/ZynPRwjB?typeform-medium=embed-snippet" data-mode="popover" style="width:54px;height:54px;position:fixed;box-shadow:0px 2px 12px rgba(0, 0, 0, 0.06), 0px 2px 4px rgba(0, 0, 0, 0.08);right:26px;bottom:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;background:#6C63FF;overflow:hidden;line-height:0;" target="_blank"> <span class="icon"> <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' style="margin-top:6px;"> <path d='M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z' fill='white' /> </svg> </span> </a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>
            </div>
        </footer>
    );
};

Footer.defaultProps = {
    menus: null
};

Footer.propTypes = {
    menus: PropTypes.any
};


export default Footer;