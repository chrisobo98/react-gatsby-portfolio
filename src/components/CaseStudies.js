import React from 'react'

import mockup1 from '../assets/images/mockup1.png'
import mockup2 from '../assets/images/mockup2.png'
import mockup3 from '../assets/images/mockup3.png'
import tech_12 from '../assets/images/tech_12.png'

const CaseStudies = (props) => (
    <section id="three">
        <div className="inner">
            <h2 className="inner-banner-header">Some of My Works</h2>
            <p className="inner-banner-text-2">Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
            <div className="grid-wrapper">
                <div className="col-3">
                    <span className="image fit"><img className="inner-banner-mockups" src={tech_12} alt="" /></span>
                    <h3 className="inner-banner-text">El Cerro Restaurant</h3>
                    <p className="inner-banner-text">Local family owned business serving the most delicious authentic Latin food</p>

                </div>
                
                <div className="col-3">
                    <span className="image fit"><img className="inner-banner-mockups" src={mockup2} alt="" /></span>
                    <h3 className="inner-banner-text">Search Engine Optimization</h3>
                    <p className="inner-banner-text">Research and Analysis, Keyword Research, Copywriting, Web Optimization, Local SEO, Content Creation, Link Building, and PPC</p>

                </div>
                <div className="col-6">
                    <span className="image fit"><img className="inner-banner-mockups" src={mockup3} alt="" /></span>
                    <h3 className="inner-banner-text">Marketing and Social</h3>
                    <p className="inner-banner-text">Branding, Email Marketing, Social Media Marketing and Ads, Automation, Content Marketing, Analytics, and Strategy and Consulting</p>

                </div>
                <div className="col-4">
                    <span className="image fit"><img className="inner-banner-phone" src={tech_12} alt="" /></span>
                    <h3 className="inner-banner-text">Marketing and Social</h3>
                    <p className="inner-banner-text">Branding, Email Marketing, Social Media Marketing and Ads, Automation, Content Marketing, Analytics, and Strategy and Consulting</p>

                </div>
                <div className="col-4">
                    <span className="image fit"><img className="inner-banner-mockups" src={mockup1} alt="" /></span>
                    <h3 className="inner-banner-text">Marketing and Social</h3>
                    <p className="inner-banner-text">Branding, Email Marketing, Social Media Marketing and Ads, Automation, Content Marketing, Analytics, and Strategy and Consulting</p>

                </div>
                <div className="col-4">
                    <span className="image fit"><img className="inner-banner-mockups" src={mockup1} alt="" /></span>
                    <h3 className="inner-banner-text">Marketing and Social</h3>
                    <p className="inner-banner-text">Branding, Email Marketing, Social Media Marketing and Ads, Automation, Content Marketing, Analytics, and Strategy and Consulting</p>

                </div>
            </div>
        </div>
    </section>
)


export default CaseStudies

