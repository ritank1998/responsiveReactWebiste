import "./Navbar.css"
import {NavLink} from "react-router-dom"
import React from "react"
const About=()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <NavLink class="navbar-brand" href="#"><i><svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg></i></NavLink>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item active">
                                        <NavLink class="nav-link" to="/home">Home</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink class="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink class="nav-link" to="/services">Services</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink class="nav-link" to="/login">Login</NavLink>
                                    </li>

                                </ul>
                            </div>
                        </nav>

                    </div>
                </div>

            </div>
        </>
    )
}
export default About