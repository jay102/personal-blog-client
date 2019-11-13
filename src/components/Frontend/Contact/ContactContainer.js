import React, { Component } from 'react';
import { TemplateFiles } from '../../../App'
import ContactView from './ContactView'
class ContactContainer extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({ "form-name": "contact", ...this.state })
        })
            .then(() => {
                alert("Success!")
                this.setState({ name: "", email: "", phone: "", message: "" })
            })
            .catch(error => alert(error));

        e.preventDefault();
    };
    encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }
    handleChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <TemplateFiles.Consumer>
                {value => {
                    const { Contact } = value.siteData;
                    let mystyle = { backgroundImage: "url(" + Contact.bg + ")" };

                    return <ContactView
                        text={Contact.text}
                        subtitle={Contact.subtitle}
                        mystyle={mystyle}
                        header={Contact.header}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                }}
            </TemplateFiles.Consumer>
        );
    }

}

export default ContactContainer