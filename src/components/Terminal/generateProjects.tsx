import { projectItemType } from "../../scripts/projects"
export default function generateProjects(projects: projectItemType[]){
    return (
        <>
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className="Project">
                    <span className="ProjectHeading">
                        <h3>{project.projectName}</h3>
                    </span>
                    <span>{project.topics.join(', ')}</span>
                    {project.description.map((point, pointIndex) => (
                        <div key={pointIndex}>{point}</div>
                    ))}
                    Link:
                        <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
                </div>
            ))}
        </>
    )

}
