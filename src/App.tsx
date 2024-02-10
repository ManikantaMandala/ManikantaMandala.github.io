import {
    createHashRouter,
    HashRouter as Router,
    Outlet
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Resume from './components/routes/Resume';
import NotFound from './components/routes/404NotFound';
import Home from './components/routes/Home';
import Terminal from './components/routes/Terminal';
import Admin from './components/routes/Admin';
import AdminDashboard from './components/AdminComponent/AdminDashboard';
import ProjectsComponentAdmin from './components/AdminComponent/ProjectComponentAdmin';
import ExperienceComponentAdmin from './components/AdminComponent/ExperienceComponentAdmin';
import AdminNavLinks from './components/AdminComponent/AdminNavBar';

const router = createHashRouter([
    {
        path: "/",
        element: <NavBarWrapper />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "terminal",
                element: <Terminal/>
            },
            {
                path: "resume",
                element: <Resume />
            },
            {
                path: "admin",
                children: [
                    {
                        index: true,
                        element: <Admin/>,
                    },
                    {
                        path: "dashboard",
                        element: <div>
                                    <AdminNavLinks/>
                                    <Outlet/>
                                </div>,
                        children:[
                            {
                                index:true,
                                element: <AdminDashboard/>
                            },
                            {
                                path: "projects",
                                element: <ProjectsComponentAdmin/>
                            },
                            {
                                path: "experience",
                                element: <ExperienceComponentAdmin/>
                            }
                        ]
                    }
                ]
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    },
    
])
function NavBarWrapper(){
    return (
        <div className='App'>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default router;
