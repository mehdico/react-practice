import React from "react"



function ContactCardA(props) {
    return (

        <div className="contact-card">
            <img src={props.imgUrl}/>
            <h3>Name: {props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCardA
