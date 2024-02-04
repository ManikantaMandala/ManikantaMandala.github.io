import { experience } from "../../scripts/experience";
export function ExperienceComponent(){
    return (
        <section className="Experience">
            <h2>Experience</h2>
            {experience.map((exp, index) => (
                <section key={index}>
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
                </section>
            ))}
        </section>
    );
}
