import '../App.css';
import { useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import { Menu, X } from 'lucide-react';
export default function NavBar(){
    const [isMobile, setIsMobile] = useState(window.innerWidth<930);
    const [isOpen, setIsOpen] = useState(false);

    function handleResize(){
        setIsMobile(window.innerWidth<930);
    }

    function toggleHam(){
        setIsOpen(!isOpen);
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='NavBar' id='nav-bar'>
            <h2>
                <a href='/'>Manikanta Mandala 👨‍💻</a>
            </h2>

            <div className='hamburger'>
                {
                    isMobile ? (
                        <div onClick={toggleHam}>
                            {
                                isOpen ? 
                                    (
                                    <div className='hamburger-open'>
                                        <div className='nav-links-container'>
                                            <NavLinks />
                                        </div>
                                        <X className='x'/>
                                    </div>
                                )
                                    :
                                        <Menu/>
                            }
                            
                        </div>
                    ):
                        (
                            <div className='nav_link'>
                                <NavLinks/>
                            </div>
                    )
                }
            </div>
        </div >
    )
}
