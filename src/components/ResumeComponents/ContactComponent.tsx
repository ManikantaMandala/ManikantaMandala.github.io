// import { contacts } from "../../scripts/contacts"
export default function ContactComponent(){
    return (
        <section className="Contacts">
            <li key='linkedin'>
                <strong>LinkedIn:</strong>
                <a href="https://www.linkedin.com/in/manikanta-mandala-206677202/" target="_blank">
                    &nbsp; https://www.linkedin.com/in/manikanta-mandala-206677202/
                </a>
            </li>
            <li key='mail'>
                <strong>Mail to:</strong>
                <a href="mailto:mandala.mallik@gmail.com" target="_blank">
                    &nbsp; mandala.mallik@gmail.com
                </a>
            </li>
            <li key='phone'>
                <strong>Call:</strong>
                <a href="tel:+918688014820" target="_blank">
                    &nbsp; +918688014820
                </a>
            </li>
            <li key='portfolio'>
                <strong>Portfolio</strong>
                <a href="https://manikantamandala.github.io" target="_blank">
                    &nbsp; MyPortfolio
                </a>
            </li>
        </section>
    )
}
