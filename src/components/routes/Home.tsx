import Footer from "../Footer"
import Button  from "../UI/Buttons/Buttons"

export default function Home(){
    return (
        <div className="Home">
            <div className="intro">
                <div>
                    <div className="intro-details">
                        <p className="greetings">Hello, I am</p>
                        <h1 className="name">Manikanta Mandala</h1>
                        <p className="aim-description">Aimed to be a Software Engineer 🎯</p>
                    </div>
                    <div className="resume-button">
                        <Button {...
                            {
                                isFilled: true,
                                label: "Resume",
                                link: "#/resume",
                                color: "#003200",
                                bgColor: "lightgreen"
                            }
                        }/>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
