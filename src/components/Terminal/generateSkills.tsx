import { skillsType } from "../../scripts/skills";
export default function generateSkills(skills: skillsType) {
    return (
        <>
            <h2> Skills </h2>
            {Object.entries(skills).map(([category, items]: [string, string[]]) => (
                <div key={category}>
                    <strong>{category}:</strong> {items.join(', ')}
                </div>
            ))}
        </>
    );
}
