import {FaLinkedin,FaGithubSquare,FaTwitterSquare} from 'react-icons/fa';
import './SocialMedia.css';
function SocialMedia(){
    return(
        <div className='nav-social'>
           <FaLinkedin className='icons'/>
            <FaGithubSquare className='icons'/>
            <FaTwitterSquare className='icons'/>
        </div>
    )
}
export default SocialMedia;
