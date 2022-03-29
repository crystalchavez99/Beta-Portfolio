import './Header.css';
import profile from '../images/profile.jpg'
function Header(){
    return(
        <div className="header">
            <div className="intro">
                <p>Hello, I'm Crystal</p>
                <span id="occupation">Software Engineer</span>
                <p>based in California, US.</p>
            </div>
            <div className="profile">
                <img src={profile} alt="profile-pic"></img>
            </div>
        </div>
    )
}
export default Header;
