import React from 'react'
import "../App.css";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-inherit">
                <a className="navbar-brand" href="/" style={{ fontSize: "30px" }}>
                    <img src="../uploads/logo.png" alt="" /> <small>Source Code Validator</small> </a>
            </nav>
        </>
    )
}
