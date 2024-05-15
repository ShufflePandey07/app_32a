import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={'/homepage'} className="navbar-brand " href="/">SuyoGAY </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <Link to={'/login'} className="btn btn-success" type="submit">Login</Link>
                        <Link to={'/register'} className="btn btn-danger ms-2" type="submit">Register</Link>
                    </form>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
