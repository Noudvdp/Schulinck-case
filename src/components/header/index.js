import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){

    }

    render() {

        return (
            <div id="header" className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-6 d-flex justify-content-start align-items-center">
                            <a href="/">
                                <img src="/img/logo.png" alt="Wolters Kluwer logo" className="logo img-fluid" />
                            </a>
                        </div>
                        <div className="col-6 d-flex justify-content-end align-items-center">
                            <div className="profile" >
                                <img src="/img/profile.png" alt="profile icon"/>
                                <span>
                                John Doe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;