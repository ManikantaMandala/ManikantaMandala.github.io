import ButtonRoute from './ButtonRoute';
import '../App.css';
export default function NavBar(){
    return (
        <div className='NavBar'>
            <div>
                <a href='/'>Manikanta Mandala 👨‍💻</a>
            </div>
            <div className='NavBarButtons'>
                <ButtonRoute info='Terminal' route='/terminal'/>
                <ButtonRoute info='Projects' route='/projects'/>
                <ButtonRoute info='Resume' route='/resume'/>
            </div>
        </div >
    )
}
