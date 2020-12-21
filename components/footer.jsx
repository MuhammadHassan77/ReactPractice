import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                    <div className="d-lg-flex d-md-block d-sm-flex">
                        <div className="row">
                            <div style={{ padding: ".75rem 1.25rem" }}>
                                <h6 className="nav-link">Popular Categories</h6>
                                <div className="text-muted">
                                    <div className="ml-3">Cars</div>
                                    <div className="ml-3">Mobiles</div>
                                    <div className="ml-3">Motorcycles</div>
                                    <div className="ml-3">jobs</div>
                                </div>
                            </div>
                            <div style={{ padding: ".75rem 1.25rem" }}>
                                <h6 className="nav-link">Trending Searches</h6>
                                <div className="text-muted">
                                    <div className="ml-3">Bikes</div>
                                    <div className="ml-3">Watches</div>
                                    <div className="ml-3">Books</div>
                                    <div className="ml-3">dogs</div>
                                </div>
                            </div>
                            <div style={{ padding: ".75rem 1.25rem" }}>
                                <h6 className="nav-link">About Us</h6>
                                <div className="text-muted">
                                    <div className="ml-3">About OLX Group</div>
                                    <div className="ml-3">OLX Blog</div>
                                    <div className="ml-3">Contact Us</div>
                                    <div className="ml-3">OLX for Businessess</div>
                                </div>
                            </div>
                            <div style={{ padding: ".75rem 1.25rem" }}>
                                <h6 className="nav-link">OLX</h6>
                                <div className="text-muted">
                                    <div className="ml-3">Help</div>
                                    <div className="ml-3">Sitemap</div>
                                    <div className="ml-3">Legal and Privacy Information</div>
                                </div>
                            </div>
                            <div style={{ padding: ".75rem 1.25rem" }}>
                                <h6 className="nav-link">Follow Us</h6>
                                <span>
                                    <a href="https://www.facebook.com" style={{ color: "#0f92f3" }}>
                                        <i className="fa fa-facebook-square fa-lg mx-1"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.twitter.com" style={{ color: "#1da1f2" }}>
                                        <i className="fa fa-twitter fa-lg mx-1"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.youtube.com" style={{ color: "red" }}>
                                        <i className="fa fa-youtube fa-lg mx-1"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.instagram.com" style={{ color: "black" }}>
                                        <i className="fa fa-instagram fa-lg mx-1"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
