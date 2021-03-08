import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

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
                    subject_text: "Hoe kan ik inloggen",
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
                    subject_text: "Hoe kan ik inloggen",
                    contact: 0,
                    contact_text: "E-mail",
                    status: 1,
                    status_text: "Gesloten",
                    modal: false,
                },
            ]
        };
    }

    componentDidMount(){

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
            tickets: changed
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
            tickets: changed
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
                                <button className="btn btn-sm btn-primary" onClick="openNewModal()">
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
                            <h4>Statistieken tickets <select className="form-control">
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
                                <tr>
                                    <td>Hoe kan ik inloggen?</td>
                                    <td>2x</td>
                                </tr>
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
                                            <div className="form-group">
                                                <label>Status:</label>
                                                <select className="form-control" onChange={ this.changeStatus.bind(this,ticket.id) }>
                                                    <option value="0" selected>open</option>
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
            </div>
        );
    }

}

export default Tickets;