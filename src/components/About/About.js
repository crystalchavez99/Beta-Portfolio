import './About.css';
function About(){
    return(
        <div className="about">
            <div className='about-intro'>
                <h1>About</h1>
                <p>I'm Crystal Chavez, a Software Engineer in the making.
                Computer Science graduate from College of the Canyons and currently enrolled in App Academy Software Engineer Course that allows me to understands the skills that make a successful software engineer.
                </p>
            </div>
            <div className='education'>
                <ul>
                    <li>
                        <p className='year'>2018-2021</p>
                        <p>Computer Science - Associate's Degree, College of the Canyons</p>
                        <p>Dealing with the problems in organizing, representing, manipulating and presenting information in an automatic processing environment.
                        I was given an understanding of the functions of the modern computer and operational skills in program development.
                        </p>
                    </li>
                    <li>
                        <p className='year'>2021-2021</p>
                        <p>California State University of Northridge</p>
                        <p>I had attended CSUN in the Fall Semester of 2021, however had left due to the lack of resources as there was never enough
                            classroom space for the necessities of my Bachelor's.
                        </p>

                    </li>
                    <li>
                        <p className='year'>2021-Present</p>
                        <p>App Academy</p>
                        <p>This course focuses on JavaScript, SQL, Node, Express.js, Python, React, Redux, and computer science
                        fundamentals as well as technical interview skills, self-presentation, and other job search curriculum.
                        The Software Engineering Track: Full-Time Online program is a total of 960 credit hours over a 24-week
                        course. I am currently in week 14 out of 24 and hope to apply my skills out there in the world</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default About;
