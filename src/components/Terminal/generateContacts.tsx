import { contactObject } from "../../scripts/contacts";
export default function generateContacts(contacts: contactObject){
    return (
        <>
            <h2> Contacts</h2>
            {Object.entries(contacts).map(([contact, link]: string[]) => (
                <li key={contact}>
                    <strong>{contact}:</strong> <a href={link} target='_blank'>{link}</a>
                </li>
            ))}
        </>
    );
}
