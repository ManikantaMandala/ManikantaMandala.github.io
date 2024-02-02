export default function Resume(){
    return (
        <div className="Resume">
            <div >
                <p>
                    A full stack developer with expertise in front-end with React.js and back-end with Spring/ 
                    Spring-boot and Node.js. Experienced in working with cross-functional teams.
                </p>
                    <section className="Education">
                        <h2 >Education</h2>
                        <h4 >
                            <a href="https://www.bmu.edu.in/" target="_blank">
                                BML Munjal University:
                            </a>
                        </h4>
                        <ul>
                            <li>Currently pursuing</li>
                            <li>Bachelors’ of computer science</li>
                            <li><i>CGPA</i>: 7.69/10</li>
                        </ul>
                    </section>
                    <section className="Skills">
                        <h2 >Skills</h2>
                        <ul>
                            <li>Frontend: HTML, CSS, Javascript, React.js</li>
                            <li>Backend: Spring/Spring-boot, Node.js, Express.js, Typescript</li>
                            <li>Database: PostgreSQL, MongoDB, MySql</li>
                            <li>Languages: Java, JavaScript, TypeScript</li>
                            <li>Tools/Platforms: Git, Neovim, Tmux, shell</li>
                            <li>currently learning: Docker, Kubernetes</li>
                        </ul>
                    </section>
                    <section>
                        <h2 >Experience</h2>
                        <section>
                            <span>
                                <a href="https://www.areksoft.com/" target="_blank">Areksoft Technologies</a>
                            </span>
                            |
                                <span>
                            Android Developer 
                                </span>
                            <ul>
                                <li>
                                    Developed a working android application has functionalities like user authentication, user data management, payment gateway. 
                                </li>
                                <li>
                                    Collaborated with 3 membered teams to design and implement the application. 
                                </li>
                                <li>
                                    Used different technologies like Java, XML, Gradle, Firebase, git.
                                </li>
                                <li>
                                        <a href="https://github.com/YashitaKumar/Chit-Fund-Management-App" target="_blank">github.com/YashitaKumar/Chit-Fund-Management-App</a> 
                                </li>
                            </ul>
                        </section>
                    </section>
                    <section>
                        <h2 >Projects</h2>
                        <section className="Project">
                            <span className="ProjectHeading">
                                <a href="https://github.com/ManikantaMandala/DocPlay" target="_blank">DocPlay</a> 
                            </span>
                            | 
                            <span>
                                Python, LangChain, GooglePalm, FAISS, Streamlit
                            </span>
                            <ul>
                            <li>
                                    Assembled an AI chat-bot that trains on the text from the document user uploaded and answer any query user ask about that document.
                            </li>
                            <li>
                                    Created a web service which is hosted in our college servers.
                                </li>
                            </ul>
                        </section>
                        <section className="Project">
                            <span className="ProjectHeading">
                                <a href="https://github.com/ManikantaMandala/learningJava/tree/day7" target="_blank">ZipShort</a> 
                            </span>
                            | 
                            <span>
                                Spring boot, React.js, PostgreSQL DB
                            </span>
                            <ul>
                            <li>
                                    Developed and implemented a URL shortening application that enhances link sharing efficiency. The application takes a long URL as input and generates a concise, easy-to-share short URL
                            </li>
                            <li>
                                    Constructed a web application with two services. One was written in React.JS and the other was written using Spring boot.
                                </li>
                            </ul>
                        </section>
                        <section className="Project">
                            <span className="ProjectHeading">
                                <a href="https://github.com/ManikantaMandala/TodoApplication" target="_blank">TodoApplication</a> 
                            </span>
                            | 
                            <span>
                                Node.js, React.js, MongoDB
                            </span>
                            <ul>
                            <li>
                            Developed a minimalist Todo Application with user authentication, user
                            </li>
                            <li>
                            Constructed a web application where frontend with React.js and the backend using Node.js. Where the implementation contains multiple libraries like, Zod, mongoose, dotenv, jsonwebtoken, Express.js, etc..
                                </li>
                            </ul>
                        </section>
                        </section>
            </div>
        </div>
    );
}
