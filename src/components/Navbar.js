import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(probs) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${probs.mode} bg-${probs.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{probs.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                        </ul>

                        <form className="d-flex">
                        <div className="form-check form-switch my-2">
                            <input onClick={probs.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                          </div>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

// go to react documentation or CWH video 6 / 19.45
// first probType "p" is small, 2nd "P" capotal note it bro
// Navbar.propTypes = {
//     title: PropTypes.string

// }
// here i am using isRequire :)
Navbar.propTypes = {
    title: PropTypes.string.isRequired

}

// if there is no prob set it is by default
Navbar.defaultProbs = {
    title: "title prob set here"

}
