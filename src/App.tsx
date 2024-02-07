import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
// import Projects from './components/routes/Projects';
import Resume from './components/routes/Resume';
import NotFound from './components/routes/404NotFound';
import Home from './components/routes/Home';
import Terminal from './components/routes/Terminal';
import Admin from './components/routes/Admin';
import AdminDashboard from './components/AdminComponent/AdminDashboard';

function App() {
    return (
        <div className='App'>
            <Router basename='/'>
                <NavBar />
                <Routes>
                    <Route 
                        path='/' 
                        element={<Home />} 
                    />
                    {/*
                        <Route 
                            path='/projects' 
                            element={<Projects />} 
                        />
                    */}
                    <Route 
                        path='/terminal' 
                        element={<Terminal />} 
                    />
                    <Route 
                        path='/resume' 
                        element={<Resume />} 
                    />
                    <Route
                        path='/admin'
                        element={<Admin/>}
                    />
                    <Route
                        path='/admin/dashboard'
                        element= {<AdminDashboard/>}
                    />
                    <Route
                        path="/*"
                        element={<NotFound/>}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
