import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Subscribe from '../components/Subscribe'
import CaseStudies from '../components/CaseStudies'



import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import denver_marketing from '../assets/images/denver_marketing.png'
import denver_seo from '../assets/images/denver_seo.png'
import web_development from '../assets/images/web_development.png'
import chrisbosch from '../assets/images/chrisbosch.png'
import gatsby from '../assets/images/gatsby.png'
import react from '../assets/images/react.png'
import netlify from '../assets/images/netlify.png'
import sass from '../assets/images/sass.png'
import nodesass from '../assets/images/nodesass.png'
import prettier from '../assets/images/prettier.png'








class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="LaunchGenics - Software Development"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                {/* My Services index.js */}
                <div id="main">

                    <section id="three">
                        <div className="inner">
                            <h2 className="inner-banner-header">My services</h2>
                            <div className="grid-wrapper">
                                <div className="col-4">
                                    <span className="image fit"><img className="inner-banner-images" src={denver_seo} alt="" /></span>
                                    <h3 className="inner-banner-text">Creative and Production</h3>
                                    <p className="inner-banner-text">Web Development and Design, E-Commerce, Mobile Sites, Landing Pages, App Design and Development, and UI/UX.</p>
                                </div>
                                <div className="col-4">
                                    <span className="image fit"><img className="inner-banner-images" src={denver_marketing} alt="" /></span>
                                    <h3 className="inner-banner-text">Search Engine Optimization</h3>
                                    <p className="inner-banner-text">Research and Analysis, Keyword Research, Copywriting, Web Optimization, Local SEO, Content Creation, Link Building, and PPC</p>
                                </div>
                                <div className="col-4">
                                    <span className="image fit"><img className="inner-banner-images" src={web_development} alt="" /></span>
                                    <h3 className="inner-banner-text">Marketing and Social</h3>
                                    <p className="inner-banner-text">Branding, Email Marketing, Social Media Marketing and Ads, Automation, Content Marketing, Analytics, and Strategy and Consulting</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About Me Page */}
                    <section id="three">
                        <div className="inner">
                            <div className="grid-wrapper">
                                <div className="col-4">
                                    <span className="image fit"><img className="inner-banner-images" src={denver_seo} alt="" /></span>
                                    <h3 className="inner-banner-text">Creative and Production</h3>
                                    <p className="inner-banner-text">Web Development and Design, E-Commerce, Mobile Sites, Landing Pages, App Design and Development, and UI/UX.</p>
                                </div>
                                <div className="col-4">
                                    <span className="image fit"><img className="inner-banner-images" src={denver_marketing} alt="" /></span>
                                    <h3 className="inner-banner-text">Search Engine Optimization</h3>
                                    <p className="inner-banner-text">Research and Analysis, Keyword Research, Copywriting, Web Optimization, Local SEO, Content Creation, Link Building, and PPC</p>
                                </div>
                                <div className="col-4">
                                    <span className="image fit"><img className="inner-banner-images" src={web_development} alt="" /></span>
                                    <h3 className="inner-banner-text">Marketing and Social</h3>
                                    <p className="inner-banner-text">Branding, Email Marketing, Social Media Marketing and Ads, Automation, Content Marketing, Analytics, and Strategy and Consulting</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="four">
                        <div className="inner">
                            <div className="grid-wrapper">
                                <div className="col-6">
                                    <span className="image fit"><img className="inner-banner-profile-pic" src={chrisbosch} alt="" /></span>
                                </div>
                                <div className="col-6">
                                    <h2 className="inner-banner-header">A Little Bit About Me</h2>
                                    <p className="inner-banner-text">My name is Christopher Bermudez Bosch. I am a Denver, Colorado-based freelancer. 
                                    If you want to review out some of the services I provide you can head on over to the services page to get a more detailed 
                                    view. But simply put, I work with small businesses, mom-and-pop shops, e-commerce sites, individuals, and anything in between 
                                    to establish an online presence for the purpose of, in the long run, bringing in more customers and of course making more 
                                    money.
                                    <br></br>
                                    <br></br>
                                    I lived most of my life living in Orlando, Florida where I gained all of my experience. I attended the University of Central Florida (Go Knights!) and studied Computer Science 
                                    while interning, and then later working upon graduation, at a digital marketing agency for a few years. I also did freelance 
                                    web and app development work during this time, and created a few apps + dozens of online stores. With referrals people I’ve 
                                    worked with I created a network of clients which allowed me to pursue freelancing full-time. I for a change, and I took what 
                                    I’ve learned over the years to create my own digital agency. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Subscribe />

                        {/* Index Tiles */}
                        <section id="one" className="tiles">
                            <article style={{backgroundImage: `url(${pic03})`}}>
                                <header className="major">
                                    <h3>Follow Me on LinkedIn</h3>
                                    <p>Lorem etiam nullam</p>
                                </header>
                                <Link to="/landing" className="link primary"></Link>
                            </article>
                            <article style={{backgroundImage: `url(${pic04})`}}>
                                <header className="major">
                                    <h3>Check Out My Instagram</h3>
                                    <p>Nisl sed aliquam</p>
                                </header>
                                <Link to="/landing" className="link primary"></Link>
                            </article>
                            <article style={{backgroundImage: `url(${pic05})`}}>
                                <header className="major">
                                    <h3>Read My Writing</h3>
                                    <p>Ipsum dolor sit amet</p>
                                </header>
                                <Link to="/landing" className="link primary"></Link>
                            </article>
                            <article style={{backgroundImage: `url(${pic06})`}}>
                                <header className="major">
                                    <h3>Watch My Videos</h3>
                                    <p>Feugiat amet tempus</p>
                                </header>
                                <Link to="/landing" className="link primary"></Link>
                            </article>
                        </section>

                        <CaseStudies />

                        {/* Get started after tiles */}
                        <section id="four">
                        <div className="inner">
                        <h2 className="inner-banner-header">Answering Some of Your Questions</h2>
                            <div className="grid-wrapper">
                            <div className="col-6">
                                    <h2>A Little Bit About Me</h2>
                                    <p className="inner-banner-text">My name is Christopher Bermudez Bosch. I am a Denver, Colorado-based freelancer. 
                                    If you want to review out some of the services I provide you can head on over to the services page to get a more detailed 
                                    view. But simply put, I work with small businesses, mom-and-pop shops, e-commerce sites, individuals, and anything in between 
                                    to establish an online presence for the purpose of, in the long run, bringing in more customers and of course making more 
                                    money.
                                    </p>
                                </div>
                                <div className="col-6">
                                    <h2>A Little Bit About Me</h2>
                                    <p className="inner-banner-text">My name is Christopher Bermudez Bosch. I am a Denver, Colorado-based freelancer. 
                                    If you want to review out some of the services I provide you can head on over to the services page to get a more detailed 
                                    view. But simply put, I work with small businesses, mom-and-pop shops, e-commerce sites, individuals, and anything in between 
                                    to establish an online presence for the purpose of, in the long run, bringing in more customers and of course making more 
                                    money.
                                    </p>
                                </div>
                                <div className="col-6">
                                    <h2>A Little Bit About Me</h2>
                                    <p className="inner-banner-text">My name is Christopher Bermudez Bosch. I am a Denver, Colorado-based freelancer. 
                                    If you want to review out some of the services I provide you can head on over to the services page to get a more detailed 
                                    view. But simply put, I work with small businesses, mom-and-pop shops, e-commerce sites, individuals, and anything in between 
                                    to establish an online presence for the purpose of, in the long run, bringing in more customers and of course making more 
                                    money.
                                    </p>
                                </div>
                                <div className="col-6">
                                    <h2>A Little Bit About Me</h2>
                                    <p className="inner-banner-text">My name is Christopher Bermudez Bosch. I am a Denver, Colorado-based freelancer. 
                                    If you want to review out some of the services I provide you can head on over to the services page to get a more detailed 
                                    view. But simply put, I work with small businesses, mom-and-pop shops, e-commerce sites, individuals, and anything in between 
                                    to establish an online presence for the purpose of, in the long run, bringing in more customers and of course making more 
                                    money.
                                    </p>
                                </div>
                                <div className="col-6">
                                    <h2>A Little Bit About Me</h2>
                                    <p className="inner-banner-text">My name is Christopher Bermudez Bosch. I am a Denver, Colorado-based freelancer. 
                                    If you want to review out some of the services I provide you can head on over to the services page to get a more detailed 
                                    view. But simply put, I work with small businesses, mom-and-pop shops, e-commerce sites, individuals, and anything in between 
                                    to establish an online presence for the purpose of, in the long run, bringing in more customers and of course making more 
                                    money.
                                    </p>
                                </div>
                                <div className="col-6">
                                    <h2>A Little Bit About Me</h2>
                                    <p className="inner-banner-text">My name is Christopher Bermudez Bosch. I am a Denver, Colorado-based freelancer. 
                                    If you want to review out some of the services I provide you can head on over to the services page to get a more detailed 
                                    view. But simply put, I work with small businesses, mom-and-pop shops, e-commerce sites, individuals, and anything in between 
                                    to establish an online presence for the purpose of, in the long run, bringing in more customers and of course making more 
                                    money.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="three">
                        <div className="inner">
                        <h2 className="inner-banner-header">This Site Was Made With</h2>
                            <div className="grid-wrapper">
                                <div className="col-2">
                                    <span className="image fit"><img className="inner-banner-images lower-made-with" src={gatsby} alt="" /></span>
                                </div>
                                <div className="col-2">
                                    <span className="image fit"><img className="inner-banner-images lower-made-with" src={react} alt="" /></span>
                                </div>
                                <div className="col-2">
                                    <span className="image fit"><img className="inner-banner-images lower-made-with" src={netlify} alt="" /></span>
                                </div>
                                <div className="col-2">
                                    <span className="image fit"><img className="inner-banner-images lower-made-with" src={sass} alt="" /></span>
                                </div>
                                <div className="col-2">
                                    <span className="image fit"><img className="inner-banner-images lower-made-with" src={nodesass} alt="" /></span>
                                </div>
                                <div className="col-2">
                                    <span className="image fit"><img className="inner-banner-images lower-made-with" src={prettier} alt="" /></span>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex