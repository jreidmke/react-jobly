import {NavLink} from "react-router-dom";
import './NavBar.css';

function NavBar() {
    const isLoggedIn = Boolean(localStorage.getItem("_token"));

    const loginLink = <NavLink exact to="/login">Login</NavLink>
    const logoutLink = <NavLink exact to="/logout">Logout</NavLink>
    return(
        <nav>
            <NavLink exact to="/">Jobly</NavLink>
            <NavLink exact to="/companies">Companies</NavLink>
            <NavLink exact to="/jobs">Jobs</NavLink>
            <NavLink exact to="/profile">Profile</NavLink>
            {isLoggedIn ? logoutLink : loginLink}
        </nav>
    )
}

export default NavBar;