import { skills } from "../../scripts/skills";
export default function SkillsComponent(){
    return (
        <section className="Skills">
        <h2>Skills</h2>
        <ul>
        {Object.entries(skills).map(([category, items]) => (
            <li key={category}>
            <strong>{category}:</strong> {items.join(', ')}
            </li>
        ))}
        </ul>
        </section>
    );
}
