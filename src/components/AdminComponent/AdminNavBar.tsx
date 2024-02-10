import { NavLink, useNavigate } from "react-router-dom"

export default function AdminNavLinks(){
    const navigate = useNavigate();
    function LogOut(){
        localStorage.removeItem('authToken');
        navigate('/admin');
    }
    return (
        <div style={{
                display:"flex",
                justifyContent: "flex-start",
                gap: "1rem"
            }}>
            <NavLink to={'/admin/dashboard/projects'}>
                project
            </NavLink>
            <NavLink to={'/admin/dashboard/experience'}>
                experience
            </NavLink>
            <button onClick={LogOut}>
                LogOut
            </button>
        </div>
    );
}
