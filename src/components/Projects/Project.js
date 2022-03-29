import './Project.css';
function Project() {
    return (
        <div className='project-section'>
            <h1>Projects</h1>
            <div className='project-list'>
                <a href="https://aa-meme-overflow.herokuapp.com/" target={"_blank"} rel="noreferrer">
                <div className='project'>
                    <h4>Meme-Overflow</h4>
                    <img src="https://raw.githubusercontent.com/adamtang5/aa_mod4_meme_overflow_project/main/public/icons/mainpage-login-ss.png" alt={"screenshot"}></img>
                    <p>Meme Overflow is a clone of StackOverflow, a website for users to ask questions, answer with memes, and comment on memes!</p>
                </div>
                </a>
                <a href="https://kantopokedexbeta.netlify.app/" target={"_blank"} rel="noreferrer">
                <div className='project'>
                    <h4>Kanto Pokedex</h4>
                    <img src="https://crystalchavez.codes/images/pokedex.PNG" alt={"screenshot"}></img>
                    <p>Created a web application to display a pokedex on the first generation of Pokemon, using PokeAPI.</p>
                </div>
                </a>
                <a href="https://lengthconverter.netlify.app/" target={"_blank"} rel="noreferrer">
                <div className='project'>
                    <h4>LengthConverter.net</h4>
                    <img src="https://crystalchavez.codes/images/length.PNG" alt={"screenshot"}></img>
                    <p>A Metric Converter web application that focuses on Length Conversion. </p>
                </div>
                </a>
            </div>
        </div>
    )
}
export default Project;
