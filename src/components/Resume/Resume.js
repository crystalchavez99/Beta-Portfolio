import resume from './resume.pdf';
import './Resume.css';
function Resume(){
    return(
        <div className="resume">
            <a  href={resume} className="resume-button" target="_blank" rel="noreferrer" download>Resume</a>
        </div>
    )
}
export default Resume;
