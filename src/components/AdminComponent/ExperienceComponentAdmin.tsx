import { experience, experienceType } from "../../scripts/experience"
import { Path, UseFormRegister, useForm } from "react-hook-form"
export default function ExperienceComponentAdmin(){
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm<experienceType[]>();
     return (
        <>
            <form>
                <h1> Experience </h1>
                {experience.map((company, index)=>(
                    <div key={index}>
                        <h3 className="admin-h3">
                            Company: 
                        </h3>
                        <textarea
                            className="admin-input"
                            defaultValue={company.companyName}
                            {...register(`${index}.companyName`)}
                            placeholder="enter company name"
                        />
                        <div>
                            Companylink:
                            <textarea
                                className="admin-input"
                                defaultValue={company.link}
                                {...register(`${index}.link`)}
                                placeholder="enter company link"
                            />
                        </div>
                        <div>
                            Role:
                            <textarea
                                className="admin-input"
                                defaultValue={company.role}
                                {...register(`${index}.role`)}
                                placeholder="enter company role"
                            />
                        </div>
                        <div>
                            <h3>Description:</h3>
                            {company.description.map((desc, descIndex)=>(
                                <textarea key={descIndex}
                                    className="admin-input"
                                    defaultValue={desc}
                                    {...register(`${index}.description.${descIndex}`)}
                                    placeholder="enter description"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </form>
        </>
    )
}
