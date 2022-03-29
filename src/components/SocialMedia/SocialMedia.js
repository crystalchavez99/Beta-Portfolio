import {FaLinkedin,FaGithubSquare,FaTwitterSquare} from 'react-icons/fa';
import './SocialMedia.css';
function SocialMedia(){
    return(
        <div className='nav-social'>
            <a>
                <FaLinkedin className='icons'/>
            </a>
            <a>
            <FaGithubSquare className='icons'/>
            </a>
            <a>
            <FaTwitterSquare className='icons'/>
            </a>

        </div>
    )
}
export default SocialMedia;
