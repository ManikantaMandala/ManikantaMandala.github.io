import { useNavigate } from "react-router-dom"

interface ButtonProps{
    info: string,
    route: string
}
export default function RouteButton({info, route}:ButtonProps){
    const navigate = useNavigate();
    function changeTo(){
        navigate(route);
    }
    return(
        <>
            <button className="Button" onClick={changeTo}>
                {info}
            </button>
        </>
    )
}
