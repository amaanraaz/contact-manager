import React from "react";

const ContactList = (props)=>{
    const removeContact = (id)=>{
        props.removeContactHandle(id);
    }

    const cont_list = props.contacts.map((contact)=>{
        return (
            <div key={contact.id}>
                <div>{contact.name}</div>
                <div>{contact.email}</div>
                <div>{contact.phone}</div>
                {/* passing arrow fn as in on click arguments cant be passed */}
                <div><button onClick={()=>removeContact(contact.id)}>Delete</button></div>
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