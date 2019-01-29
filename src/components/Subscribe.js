import React from 'react'

const Subscribe = (props) => (
    <section id="subscribe" className="major">
        <div className="inner">
            <header className="content">
                <h1>2,000+ and 
                    <br/>Growing!</h1>
            </header>
            <div className="awesome-subs">
                <p>Awesome Subscribers</p>
            </div>
            <div className="grid-wrapper">
                <div className="col-3"></div>
                <div className="col-6">
                        <form method="post" action="#">
                            <div className="grid-wrapper">
                                <div className="col-6">
                                    <label htmlFor="name">Name</label>
                                    <div className="mb-5"><input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Name" /></div>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="name">Email</label>
                                    <div className="mb-5"><input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" /></div>
                                </div>    
                            </div>
                        </form>
                    <ul className="actions">
                        <li><a href="#one" className="button special crimson">Get Started</a></li>
                    </ul>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    </section>
)

export default Subscribe