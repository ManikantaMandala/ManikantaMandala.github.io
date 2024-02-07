import { projects } from "../../scripts/projects";

export default function ProjectsComponent(){

    return (
        <section>
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <section key={index} className="Project">
                    <span className="ProjectHeading">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">{project.projectName}</a>
                    </span>
                    |
                    <span>{project.topics.join(', ')}</span>
                    <ul>
                        {project.description.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                        ))}
                    </ul>
                </section>
            ))}
        </section>
    );
}
