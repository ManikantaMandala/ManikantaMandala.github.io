import { skillsType } from "../../scripts/skills";
export default function generateSkills(skills: skillsType, output:string) {
    return (
        <div className="terminal-output">
            <p>Manikanta$ {output}</p>
            <h2> Skills </h2>
            {Object.entries(skills).map(([category, items]: [string, string[]]) => (
                <div key={category}>
                    <strong>{category}:</strong> {items.join(', ')}
                </div>
            ))}
        </div>
    );
}
