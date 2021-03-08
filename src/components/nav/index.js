import React, { Component } from "react";

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){

    }

    render() {

        return (
            <div id="nav" className="nav">
                <div className="container">
                    <div className="row">
                        <div className="col-6 d-flex justify-content-start align-items-center">
                            <a href="/" className="nav-item">
                                Home
                            </a>
                            <a href="/" className="nav-item active">
                                Helpdesk
                            </a>
                        </div>
                        <div className="col-6 d-flex justify-content-end align-items-center">
                            <span className="company">
                                Wolters Kluwer
                            </span>
                            <span className="city">
                                Venlo
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Nav;