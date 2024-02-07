import { educationType } from "../../scripts/education"
export default function generateEducation(education: educationType[], output:string){
    return (
        <div className="terminal-output">
            <p>Manikanta$ {output}</p>
            <h2> Education </h2>
            {education.map((school: educationType, index: number) => (
                <div key={index}>
                    <h2>{school.school}</h2>
                    {school.description.map((point: string, pointIndex: number) => (
                        <p key={pointIndex}>{point}</p>
                    ))}
                </div>
            ))}
        </div>
    )
}
