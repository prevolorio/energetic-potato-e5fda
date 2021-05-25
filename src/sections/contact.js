import React from 'react';
import { InlineWidget } from 'react-calendly'

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2 className="section__title text-center mb-16" data-sal="fade" data-sal-easing="ease-in-cubic" style={{ paddingTop: "5rem", marginBottom: "0" }}>Contact</h2>
            <InlineWidget url="https://calendly.com/launchbh" />
        </section>   
    );
};

export default Contact;