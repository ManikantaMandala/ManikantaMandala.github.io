// import { contactObject } from "../../scripts/contacts";
export default function generateContacts(/*contacts: contactObject,*/ output: string){
    return (
        <div className="terminal-output">
            <p>Manikanta$ {output}</p>
            <h2> Contacts</h2>
            <li key='linkedin'>
                <strong>LinkedIn:</strong>
                <a href="https://www.linkedin.com/in/manikanta-mandala-206677202/" target="_blank">
                    https://www.linkedin.com/in/manikanta-mandala-206677202/
                </a>
            </li>
            <li key='mail'>
                <strong>Mail to:</strong>
                <a href="mailto:mandala.mallik@gmail.com" target="_blank">
                    mandala.mallik@gmail.com
                </a>
            </li>
            <li key='phone'>
                <strong>Call:</strong>
                <a href="tel:+918688014820" target="_blank">
                    +918688014820
                </a>
            </li>
        </div>
    );
}
