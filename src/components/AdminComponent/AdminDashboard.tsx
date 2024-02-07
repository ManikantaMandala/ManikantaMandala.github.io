// import { BrowserRouter, Route, Router } from "react-router-dom";
// import ProjectsComponent from "../ResumeComponents/ProjectsComponent";

import { useEffect } from "react"
// import { useNavigate } from "react-router-dom";
import ProjectsComponentAdmin from "./ProjectComponentAdmin";

export default function AdminDashboard(){
    // const navigate = useNavigate();
    useEffect(()=>{
        // get information
    },[]);
    return (
        <>
            Hello to Admin
            <ProjectsComponentAdmin/>
        </>
    )
}
