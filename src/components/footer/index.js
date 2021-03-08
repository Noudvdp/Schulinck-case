import React, { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){

    }

    render() {
        return (
            <>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <h4>
                                    Contact
                                </h4>
                                <a href="mailto:info@wolterskluwer.com">info@wolterskluwer.com</a>
                            </div>
                            <div className="col-12 col-lg-4 mt-5 mt-lg-0">
                                <h4>
                                    Wolters Kluwer
                                </h4>
                                <a href="#">Nederland</a>
                                <a href="#">Duitsland</a>
                                <a href="#">België</a>
                            </div>
                            <div className="col-12 col-lg-4 mt-5 mt-lg-0">
                                <h4>
                                    Socials
                                </h4>
                                <div className="d-flex socials mt-3 mt-lg-1">
                                    <a href="#" target="_blank">
                                        <i className="fab fa-facebook-f"/>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-twitter"/>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-linkedin"/>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-youtube"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                © Wolters Kluwer Nederland BV, 2020
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default Footer;