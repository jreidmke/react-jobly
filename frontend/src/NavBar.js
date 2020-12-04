import {NavLink} from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return(
        <nav>
            <NavLink exact to="/">Jobly</NavLink>
            <NavLink exact to="/companies">Companies</NavLink>
            <NavLink exact to="/jobs">Jobs</NavLink>
            <NavLink exact to="/profile">Profile</NavLink>
        </nav>
    )
}

export default NavBar;