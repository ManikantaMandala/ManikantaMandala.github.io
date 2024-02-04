import description from "../../scripts/shortDescription";
import EducationComponent from "../ResumeComponents/EducationComponent";
import SkillsComponent from "../ResumeComponents/SkillsComponent";
import { ExperienceComponent } from "../ResumeComponents/ExperienceComponent";
import ProjectsComponent from "../ResumeComponents/ProjectsComponent";

export default function Resume(){
    return (
        <div className="Resume">
            <div >
                <p>
                    {description} 
                </p>
                <EducationComponent />
                <SkillsComponent/>
                <ExperienceComponent/>
                <ProjectsComponent/>
            </div>
        </div>
    );
}
