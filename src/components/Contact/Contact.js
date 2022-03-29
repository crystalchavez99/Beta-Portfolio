import './Contact.css';
function Contact(){
    return(
        <div className="contact">
            <h1>Contact</h1>
            <p>If you ever want to get in touch my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you.</p>
            <div className='contact-me'>
            <a className="email-button" href="mailto:chavezcrystal1999@yahoo.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
            </div>
        </div>
    )
}
export default Contact;
