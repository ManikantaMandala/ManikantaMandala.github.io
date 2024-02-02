import ButtonRoute from './ButtonRoute';
import '../App.css';
export default function NavBar(){
    return (
        <div className='NavBar'>
            <h2>
                <a href='/'>Manikanta Mandala 👨‍💻</a>
            </h2>
            <div className='NavBarButtons'>
                <ButtonRoute info='Terminal' route='/terminal'/>
                <ButtonRoute info='Projects' route='/projects'/>
                <ButtonRoute info='Resume' route='/resume'/>
            </div>
        </div >
    )
}
