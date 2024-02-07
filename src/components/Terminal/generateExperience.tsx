import { experienceType } from "../../scripts/experience";
export default function generateExperience(experience: experienceType[], output:string){
    return (
        <div className="terminal-output">
            <p>Manikanta$ {output}</p>
            <h2>Experience</h2>
            {experience.map((exp, index) => (
                <div key={index}>
                    <span>
                        <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">{exp.companyName}</a>
                    </span>
                    |
                    <span>{exp.role}</span>
                    <ul>
                        {exp.description.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                        ))}
                        <li>
                            <a href={exp.link} target="_blank" rel="noopener noreferrer">{exp.link}</a>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    ) 
}
