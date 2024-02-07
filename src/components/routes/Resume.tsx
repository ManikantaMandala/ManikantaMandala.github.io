import description from "../../scripts/shortDescription";
import EducationComponent from "../ResumeComponents/EducationComponent";
import SkillsComponent from "../ResumeComponents/SkillsComponent";
import { ExperienceComponent } from "../ResumeComponents/ExperienceComponent";
import ProjectsComponent from "../ResumeComponents/ProjectsComponent";
import ContactComponent from "../ResumeComponents/ContactComponent";
import Footer from "../Footer";

export default function Resume(){
    return (
        <div className="Resume">
            <div >
                <ContactComponent/>
                <hr/>
                <p>
                    {description} 
                </p>
                <hr/>
                <EducationComponent />
                <hr/>
                <SkillsComponent/>
                <hr/>
                <ExperienceComponent/>
                <hr/>
                <ProjectsComponent/>
            </div>
            <Footer/>
        </div>
    );
}
