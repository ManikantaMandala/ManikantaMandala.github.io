// import { BrowserRouter, Route, Router } from "react-router-dom";
// import ProjectsComponent from "../ResumeComponents/ProjectsComponent";

import { useEffect, useState } from "react"
import ProjectsComponentAdmin from "./ProjectComponentAdmin";
import ExperienceComponentAdmin from "./ExperienceComponentAdmin";
import '../../styling/adminStyling.css'


export default function AdminDashboard(){
    // const navigate = useNavigate();
    useEffect(()=>{
        // get information
    },[]);
    return (
        <>
            {/*
                */}
        <ProjectsComponentAdmin/>
            <ExperienceComponentAdmin />
        </>
    )
}
