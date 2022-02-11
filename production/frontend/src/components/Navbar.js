import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <header className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
            <Link to={"/"} className="navbar-brand">
                News-site
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to={"/users"} className="nav-item nav-link">
                        Users
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/articles"} className="nav-item nav-link">
                        Articles
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/comments"} className="nav-item nav-link">
                        Comments
                    </Link>
                </li>
            </ul>
        </header>


    );
}


export default Navbar