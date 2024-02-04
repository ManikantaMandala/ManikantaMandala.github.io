import { education } from "../../scripts/education"
export default function EducationComponent(){
    return (
        <section className="Education">
            <h2> Education </h2>
            {education.map((edu, index) =>(
                    <div key={index}>
                        <h4>
                            <a href={edu.schoolLink} target="_blank">
                                {edu.school}
                            </a>
                        </h4>
                        <ul>
                            {edu.description.map((desc, i)=>(
                                    <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))
            }   
        </section>
    )
}
