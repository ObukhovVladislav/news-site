import {NavLink, Link} from 'react-router-dom';
import React from "react";

function Navbar({isAuthenticated, logout}) {
    let loginLink, loginTitle, loginHandler;
    loginLink = "/login";
    loginTitle = "login";
    if (isAuthenticated) {
        loginLink = "/logout";
        loginTitle = "logout";
        loginHandler = logout;
    }
    return (
        <header className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
            <Link to={"/"} className="navbar-brand">
                News-site
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to={"/users"} className="nav-item nav-link">
                        Пользователи
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/articles"} className="nav-item nav-link">
                        Статьи
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/comments"} className="nav-item nav-link">
                        Комментарии
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={loginLink} className="nav-link" onClick={loginHandler}>
                        {loginTitle}
                    </Link>
                </li>
            </ul>
        </header>


    );
}


export default Navbar