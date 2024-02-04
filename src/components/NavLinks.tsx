import { NavLink } from "react-router-dom"
export default function NavLinks(){
    return (
        <>
            <NavLink to={'/terminal'}>Terminal</NavLink>
            {/* <NavLink to={'/projects'}>Projects</NavLink> */}
            <NavLink to={'/resume'}>Resume</NavLink>
        </>
    )
}
