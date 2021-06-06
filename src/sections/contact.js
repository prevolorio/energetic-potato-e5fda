import React from 'react';
import { InlineWidget } from 'react-calendly'

const Contact = () => {
    return (
        <section id="contact" className="contact bg-gray">
            <h2 className="font-bold text-5xl text-center mb-16" data-sal="fade" data-sal-easing="ease-in-cubic" style={{ paddingTop: "5rem" }}>Contact</h2>
            <InlineWidget url="https://calendly.com/launchbh" />
        </section>   
    );
};

export default Contact;