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
            <label>Name :</label>
            <input type="text" placeholder="Enter Name..." value={name} onChange={(e)=>{
                setName(e.target.value);
            }} />
            <label>Email :</label>
            <input type="text" placeholder="Enter Email..." value={email} onChange={(e)=>{
                setEmail(e.target.value);
             }} />
            <label>Phone No. :</label>
            <input type="text" placeholder="Enter Phone Number..." value={phone} onChange={(e)=>{
                setPhone(e.target.value); 
            }} />
            <button onClick={add}>Add</button>
        </div>
    )
}

export default AddContact;