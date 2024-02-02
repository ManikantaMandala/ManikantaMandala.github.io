import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar';
import Projects from './components/routes/Projects';
import Resume from './components/routes/Resume';
import Home from './components/routes/Home';
import Terminal from './components/routes/Terminal';

function App() {
  return (
      <div className='App'>
          <BrowserRouter>
              <NavBar />
                <Routes>
                    <Route
                        path='/'
                        element=<Home/>
                    />
                    <Route
                        path='/projects'
                        element=<Projects/>
                    />
                    <Route
                        path='/terminal'
                        element=<Terminal/>
                    />
                    <Route
                        path='/resume'
                        element=<Resume/>
                    />
                </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
