import React from 'react';
import Calendly from './calendly';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2 className="section__title text-center mb-16" data-sal="fade" data-sal-easing="ease-in-cubic" style={{ paddingTop: "5rem", marginBottom: "0" }}>Contact</h2>
            <Calendly />
        </section>   
    );
};

export default Contact;