import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <div className="container">
                test
            </div>
        );
    }

}

export default Index;