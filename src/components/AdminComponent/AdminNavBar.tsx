import { NavLink } from "react-router-dom"
export default function AdminNavLinks(){
    return (
        <div style={{
                display:"flex",
                justifyContent: "flex-start",
                gap: "1rem"
            }}>
            <NavLink to={'/admin/dashboard/projects'}>
                project
            </NavLink>
            <NavLink to={'/admin/dashboard/experience'}>experience</NavLink>
        </div>
    )
}
