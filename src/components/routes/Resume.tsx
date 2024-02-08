import description from "../../scripts/shortDescription";
import EducationComponent from "../ResumeComponents/EducationComponent";
import SkillsComponent from "../ResumeComponents/SkillsComponent";
import { ExperienceComponent } from "../ResumeComponents/ExperienceComponent";
import ProjectsComponent from "../ResumeComponents/ProjectsComponent";
import ContactComponent from "../ResumeComponents/ContactComponent";
import Footer from "../Footer";
import print from "../../scripts/printResume";

export default function Resume(){
    return (
        <div className="Resume">
            <h2 id="name"></h2>
            <div id="print-div" style={{display: "flex", justifyContent:"flex-end"}}>
                <button id="print-button" onClick={print}> Print </button>
            </div>
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
