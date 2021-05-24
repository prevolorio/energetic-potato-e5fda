import React from 'react';
import PropTypes from 'prop-types';

const PricingPlan = ({ plan }) => (
    <div className={`pricing__item ${plan.featured ? 'pricing__item--active': ''} `} data-sal="fade" data-sal-easing="ease-in-cubic" data-sal-duration="400">
        <div className="pricing__item-content">
            <h3 className="pricing__item-title">{ plan.title }</h3>
            {
                plan.planFeatures.length > 0 &&
                <ul className="pricing__item-features">
                    {
                        plan.planFeatures.map(feature => (
                            <li key={ feature }>{ feature }</li>
                        ))
                    }
                </ul>
            }
        </div>
        <a href={ plan.buttonUrl } className={`btn ${!plan.featured ? 'btn--primary': ''}`}>{ plan.buttonText }</a>
        <!-- Calendly link widget begin -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/launchbh'});return false;">Schedule time with me</a>
<!-- Calendly link widget end -->
    </div>
);

PricingPlan.propTypes = {
    plan: PropTypes.object.isRequired
};


export default PricingPlan;