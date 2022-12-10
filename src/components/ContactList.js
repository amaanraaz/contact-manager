import React from "react";

const ContactList = (props)=>{
    const cont_list = props.contacts.map((contact)=>{
        return (
            <div>
                <div>{contact.name}</div>
                <div>{contact.email}</div>
                <div>{contact.phone}</div>
                <div><button>Delete</button></div>
            </div>
        )
    })
    return (
        <div className="contact-lists">
            {cont_list}
        </div>
    )
}

export default ContactList;