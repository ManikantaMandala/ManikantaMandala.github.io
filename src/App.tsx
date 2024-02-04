import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
// import Projects from './components/routes/Projects';
import Resume from './components/routes/Resume';
import Home from './components/routes/Home';
import Terminal from './components/routes/Terminal';
import Footer from './components/Footer';

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
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
