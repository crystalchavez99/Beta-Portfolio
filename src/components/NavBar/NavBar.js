import { NavLink } from "react-router-dom";
import SocialMedia from "../SocialMedia/SocialMedia";
import './NavBar.css';
function NavBar(){
    return (
        <div className="nav-bar">
            <h2>Crystal Chavez</h2>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <SocialMedia/>
        </div>
    )
}
export default NavBar;
