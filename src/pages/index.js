import React, { Component } from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Tickets from "../components/tickets";
import Footer from "../components/footer";

class Index extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // set title on page
        document.title = "Schulinck case";
    }

    render() {

        return (
            <>
                <div className="position-fixed w-100">
                    <Header />
                    <Nav />
                </div>
                <div className="content">
                    <Tickets />
                </div>
                <Footer />
            </>
        );
    }

}

export default Index;