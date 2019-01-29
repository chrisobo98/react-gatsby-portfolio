import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <h2 id="content">Located in Denver, CO</h2>
            <header className="major">
                <h1>Chris Bosch Full-Stack Developer</h1>
            </header>
            <div className="content">
                <p>Welcome to the LaunchGenics Software Development section, here you'll learn lots of cool things about the 
                    latest technologies such as React, Swift, AWS and more!
                </p>
            </div>
            <div className="grid-wrapper">
                <div className="col-3"></div>
                <div className="col-3">
                    <ul className="actions">
                        <li><a href="#one" className="button special">Get Started</a></li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul className="actions">
                        <li><a href="#one" className="button">Get in Touch</a></li>
                    </ul>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    </section>
)

export default Banner
