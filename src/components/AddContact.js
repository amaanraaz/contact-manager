import React, { useState } from "react";

const AddContact = (props)=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    function add(e){
        if(name==="" || email==="" || phone===""){
            alert("All fields are mandatory");
            return;
        }
        props.addContactHandle(name,email,phone);
        setName("");
        setEmail("");
        setPhone("");
    }
    return (
        <div className="input-form">
            <div className="input-field">
            <input type="text" placeholder="Enter Name..." value={name} onChange={(e)=>{
                setName(e.target.value);
            }} />
            </div>
            <div className="input-field">
            <input type="text" placeholder="Enter Email..." value={email} onChange={(e)=>{
                setEmail(e.target.value);
             }} />
             </div>
            <div className="input-field">
            <input type="text" placeholder="Enter Phone Number..." value={phone} onChange={(e)=>{
                setPhone(e.target.value); 
            }} />
            </div>
            <div className="add-btn">
            <button onClick={add}>Add</button>
            </div>
        </div>
    )
}

export default AddContact;