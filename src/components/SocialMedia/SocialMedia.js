import {FaLinkedin,FaGithubSquare,FaTwitterSquare} from 'react-icons/fa';
import './SocialMedia.css';
function SocialMedia(){
    return(
        <div className='nav-social'>
            <a href="https://www.linkedin.com/in/cchavez99/" target={"_blank"} rel="noreferrer">
                <FaLinkedin className='icons'/>
            </a>
            <a href="https://github.com/crystalchavez99" target={"_blank"} rel="noreferrer">
            <FaGithubSquare className='icons'/>
            </a>
            <a href="https://twitter.com/chavezcrystal99" target={"_blank"} rel="noreferrer">
            <FaTwitterSquare className='icons'/>
            </a>

        </div>
    )
}
export default SocialMedia;
