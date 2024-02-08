import { SubmitHandler, useForm } from "react-hook-form";
import { projectItemType, projects } from "../../scripts/projects";

export default function ProjectsComponentAdmin() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    }=useForm<projectItemType[]>({
        //TODO: get projects data from backend
        defaultValues: projects
    });
    const onSubmit : SubmitHandler<projectItemType[]> = (data) =>{
        alert(data);
        console.log(data)
        // TODO: how to send/ store this projects data
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1> Projects </h1>
            {projects.map((project, index) => (
                <div key={index}>
                    <div>
                        <h2 className="admin-h3">
                            Project Name: 
                        </h2>
                        <input className="admin-input"
                            {...register(`${index}.projectName`)}
                            placeholder="enter project name"
                            defaultValue={project.projectName}
                        />
                    </div>
                    <div className="admin-link">
                        <h2 className="admin-h3">
                            Link: 
                        </h2>
                        <textarea className="admin-input"
                            defaultValue={project.link}
                            {...register(`${index}.link`)}
                        />
                    </div>
                    <div>
                        <h3> Topics</h3>
                    {
                        project.topics.map((topic, topicIndex)=>(
                            <div className="admin-topic"
                                key={topicIndex}>
                                <textarea
                                    className="admin-input"
                                    {...register(`${index}.topics.${topicIndex}`)}
                                    defaultValue={topic}
                                    placeholder="enter topics used"
                                />
                            </div>
                        ))
                    }
                    </div>
                    <div>
                        <h2 className="admin-h3">
                            Description
                        </h2>
                        {
                            project.description.map((desc, descIndex) => (
                            <div className="admin-description"
                                key={descIndex}>
                                <textarea 
                                    className="admin-input"
                                    {...register(`${index}.description.${descIndex}`)}
                                    placeholder="enter description"
                                    defaultValue={desc}
                                />
                            </div>
                        ))
                        }
                    </div>
                    <hr/>
                </div>
            ))}
            <button type="submit">
                Submit
            </button>
        </form>
    );
}
