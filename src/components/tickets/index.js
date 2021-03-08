import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import $ from "jquery";

class Tickets extends Component {
    constructor(props) {
        super(props);

        // initiate all states
        this.state = {
            tickets: [
                {
                    id: 0,
                    name: "Jan Willem",
                    subject: 0,
                    subject_text: "Hoe kan ik inloggen?",
                    contact: 0,
                    contact_text: "E-mail",
                    status: 0,
                    status_text: "Open",
                    modal: false,
                },
                {
                    id: 1,
                    name: "Jan Willem",
                    subject: 0,
                    subject_text: "Hoe kan ik inloggen?",
                    contact: 0,
                    contact_text: "E-mail",
                    status: 1,
                    status_text: "Gesloten",
                    modal: false,
                },
                {
                    id: 2,
                    name: "Jan Willem",
                    subject: 1,
                    subject_text: "Waarom werkt de site niet in Internet Explorer?",
                    contact: 0,
                    contact_text: "E-mail",
                    status: 1,
                    status_text: "Gesloten",
                    modal: false,
                },
            ],
            newTicket: false,
            name: "",
            subject: 0,
            subject_text: "Hoe kan ik inloggen?",
            contact: 0,
            contact_text: "E-mail",
            count: ["",""],
        };
    }

    /**
     * Count per given object with key
     * https://stackoverflow.com/questions/17313268/idiomatically-find-the-number-of-occurrences-a-given-value-has-in-an-array
     *
     * @param ary
     * @param classifier
     * @returns {*}
     */
    count(ary, classifier) {
        classifier = classifier || String;
        return ary.reduce(function (counter, item) {
            var p = classifier(item);
            counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
            return counter;
        }, {})
    };

    countSubjectTickets() {
        let tickets = this.state.tickets;
        let countArray = [];

        let reducedTickets = this.count(tickets, function (ticket) {
            return ticket.subject
        });

        console.log(reducedTickets);

        for (const [key, value] of Object.entries(reducedTickets)) {
            if( Number(key) === 0 ) {
                countArray.push({
                   id : 0,
                   text : "Hoe kan ik inloggen?",
                   count : value ,
                });
            }
            else if( Number(key) === 1 ) {
                countArray.push({
                    id : 1,
                    text : "Waarom werkt de site niet in Internet Explorer?",
                    count : value ,
                });
            }
            else if( Number(key) === 2 ) {
                countArray.push({
                    id : 2,
                    text : "Ik ben mijn wachtwoord vergeten",
                    count : value ,
                });
            }
            else if( Number(key) === 3 ) {
                countArray.push({
                    id : 3,
                    text : "Overig",
                    count : value ,
                });
            }
        }

        console.log(countArray)

        this.setState({
            count : countArray
        })
    }

    handleModal(id, state) {
        let tickets = this.state.tickets;
        let changed = tickets.map( ticket => {
            if( ticket.id === id ){
                return (
                    {
                        id: ticket.id,
                        name: ticket.name,
                        subject: ticket.subject,
                        subject_text: ticket.subject_text,
                        contact: ticket.contact,
                        contact_text: ticket.contact_text,
                        status: ticket.status,
                        status_text: ticket.status_text,
                        modal: state,
                    }
                )
            }
            else {
                return ticket;
            }
        });

        this.setState({
            tickets: changed.sort((a, b) => parseFloat(a.status) - parseFloat(b.status))
        });
    }

    saveModal(id) {
        let tickets = this.state.tickets;
        let changed;

        if(this.state.changedTickets){
            changed = this.state.changedTickets;
        }
        else {
            changed = tickets.map( ticket => {
                if( ticket.id === id ){
                    return (
                        {
                            id: ticket.id,
                            name: ticket.name,
                            subject: ticket.subject,
                            subject_text: ticket.subject_text,
                            contact: ticket.contact,
                            contact_text: ticket.contact_text,
                            status: ticket.status,
                            status_text: ticket.status_text,
                            modal: false,
                        }
                    )
                }
                else {
                    return ticket;
                }
            });
        }

        this.setState({
            tickets: changed.sort((a, b) => parseFloat(a.status) - parseFloat(b.status))
        });
    }

    changeStatus(id, e) {
        let status = Number(e.target.value);
        let tickets = this.state.tickets;
        let statusText;

        if(status === 1) {
            statusText = "Gesloten";
        }
        else {
            statusText = "Open";
        }

        let changed = tickets.map( ticket => {
            if( ticket.id === id ){

                //Send info to "user"
                if(status === 1) {
                    console.log( ticket.contact_text + " " + ticket.name );
                }

                return (
                    {
                        id: ticket.id,
                        name: ticket.name,
                        subject: ticket.subject,
                        subject_text: ticket.subject_text,
                        contact: ticket.contact,
                        contact_text: ticket.contact_text,
                        status: status,
                        status_text: statusText,
                        modal: false,
                    }
                )
            }
            else {
                return ticket;
            }
        });

        this.setState({
            changedTickets: changed
        });
    }

    hideNew() {
        this.setState({
           newTicket: false,
        });
    }

    openNew() {
        this.setState({
            newTicket: true,
            name: "",
            subject: 0,
            subject_text: "Hoe kan ik inloggen?",
            contact: 0,
            contact_text: "E-mail",
        });
    }

    changeNameNew(e) {
        this.setState({
           name: e.target.value
        });
    }

    changeSubjectNew(e) {
        let text;
        let choice = Number(e.target.value)

        if(choice === 0){
            text = "Hoe kan ik inloggen?";
        }
        else if(choice === 1) {
            text = "Waarom werkt de site niet in Internet Explorer?";
        }
        else if(choice === 2) {
            text = "Ik ben mijn wachtwoord vergeten";
        }
        else if(choice === 3) {
            text = "Overig";
        }

        this.setState({
            subject: choice,
            subject_text: text
        });
    }

    changeContactNew(e) {
        let text;
        let choice = Number(e.target.value)

        if(choice === 0){
            text = "E-mail";
        }
        else if(choice === 1) {
            text = "SMS";
        }
        else if(choice === 2) {
            text = "Telefonisch";
        }

        this.setState({
            contact: choice,
            contact_text: text
        });
    }

    saveNewTicket() {
        //to use state in function
        let that = this;

        if(this.state.name.length <= 1) {
            $("input[name='full-name']").css("border","2px solid red");
        }
        else {
            let oldTickets = this.state.tickets;
            let newTicket = {
                id: oldTickets.length,
                name: this.state.name,
                subject: this.state.subject,
                subject_text: this.state.subject_text,
                contact: this.state.contact,
                contact_text: this.state.contact_text,
                status: 0,
                status_text: "Open",
                modal: false,
            }

            let tickets = oldTickets.concat(newTicket);

            this.setState({
                tickets: tickets.sort((a, b) => parseFloat(a.status) - parseFloat(b.status)),
                newTicket: false,
            })
            
            setTimeout( function (){
                that.countSubjectTickets();
            }, 500)
        }
    }

    componentDidMount() {
        this.countSubjectTickets();
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <section>
                            <div className="d-flex justify-content-between align-items-center">
                                <h4>
                                    Overzicht tickets
                                </h4>
                                <button className="btn btn-sm btn-primary" onClick={ this.openNew.bind(this) }>
                                    <i className="fal fa-plus" /> Ticket toevoegen
                                </button>
                            </div>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Volledige naam</th>
                                    <th>Onderwerp</th>
                                    <th>Status</th>
                                    <th>Acties</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.tickets.map( ticket => {
                                        return(
                                            <tr key={ ticket.id }>
                                                <td>
                                                    { ticket.name }
                                                </td>
                                                <td>
                                                    { ticket.subject_text }
                                                </td>
                                                <td>
                                                    { ticket.status_text }
                                                </td>
                                                <td>
                                                    {
                                                        ticket.status === 0 ?
                                                            <button className="btn btn-sm btn-secondary" onClick={ this.handleModal.bind(this, ticket.id, true) }>
                                                                Wijzigen
                                                            </button>
                                                        :
                                                            <button className="btn btn-sm btn-secondary" onClick={ this.handleModal.bind(this, ticket.id, true) }>
                                                                Bekijken
                                                            </button>
                                                    }
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                                </tbody>
                            </table>
                        </section>
                    </div>
                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <section>
                            <h4>Statistieken tickets
                            <select className="form-control">
                                <option>allemaal</option>
                                <option>open</option>
                                <option>gesloten</option>
                            </select></h4>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Onderwerp</th>
                                    <th>Aantal</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.count.map( subject => {
                                       return(
                                            <tr>
                                                <td>{ subject.text }</td>
                                                <td>{ subject.count } x</td>
                                            </tr>
                                       )
                                    })
                                }
                                </tbody>
                            </table>
                        </section>
                    </div>
                </div>
                {
                    this.state.tickets.map(ticket => {
                        return(
                            <Modal key={ticket.id} show={ ticket.modal } onHide={ this.handleModal.bind(this, ticket.id, false) }>
                                <Modal.Header closeButton>
                                    <Modal.Title>Ticket</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="form-group">
                                        <label><strong>Volledige naam:</strong></label>
                                        <p>{ ticket.name }</p>
                                    </div>
                                    <div className="form-group">
                                        <label><strong>Onderwerp:</strong></label>
                                        <p>{ ticket.subject_text }</p>
                                    </div>
                                    <div className="form-group">
                                        <label><strong>Contact bij status wijziging:</strong></label>
                                        <p>{ ticket.contact_text }</p>
                                    </div>
                                    {
                                        ticket.status === 0 ?
                                            <>
                                            <hr/>
                                            <div className="form-group select-control">
                                                <label>Status:</label>
                                                <select className="form-control" onChange={ this.changeStatus.bind(this,ticket.id) }>
                                                    <option value="0">open</option>
                                                    <option value="1">gesloten</option>
                                                </select>
                                            </div>
                                            </>
                                            :
                                            <div className="form-group">
                                                <label><strong>Status:</strong></label>
                                                <p>
                                                    { ticket.status_text }
                                                </p>
                                            </div>
                                    }
                                </Modal.Body>
                                <Modal.Footer>
                                    <button onClick={ this.handleModal.bind(this, ticket.id, false) }>
                                        Sluiten
                                    </button>
                                    {
                                        ticket.status === 0 ?
                                            <button onClick={this.saveModal.bind(this, ticket.id)}>
                                                Opslaan
                                            </button>
                                            : ""
                                    }
                                </Modal.Footer>
                            </Modal>
                        );
                    })
                }
                <Modal show={ this.state.newTicket } onHide={ this.hideNew.bind(this) }>
                    <Modal.Header closeButton>
                        <Modal.Title>Ticket</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label className="fw-bold">Volledige naam:</label>
                            <input type="text" name="full-name" required="" value={ this.state.name }
                                   onChange={ this.changeNameNew.bind(this) } className="form-control" />
                        </div>
                        <div className="form-group mt-3 select-control">
                            <label className="fw-bold">Onderwerp:</label>
                            <select className="form-control" name="subject"
                                    onChange={ this.changeSubjectNew.bind(this) } value={ this.state.subject }>
                                <option value="0">Hoe kan ik inloggen?</option>
                                <option value="1">Waarom werkt de site niet in Internet Explorer?</option>
                                <option value="2">Ik ben mijn wachtwoord vergeten</option>
                                <option value="3">Overig</option>
                            </select>
                        </div>
                        <div className="form-group mt-3 select-control">
                            <label className="fw-bold">Contact bij status wijziging:</label>
                            <select className="form-control" name="contact"
                                    onChange={ this.changeContactNew.bind(this) } value={ this.state.contact }>
                                <option value="0">E-mail</option>
                                <option value="1">SMS</option>
                                <option value="2">Telefonisch</option>
                            </select>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={ this.hideNew.bind(this) }>
                            Sluiten
                        </button>
                        <button onClick={ this.saveNewTicket.bind(this) }>
                            Opslaan
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}

export default Tickets;