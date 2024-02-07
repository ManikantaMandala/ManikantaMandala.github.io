export default function generateHelp(expression: string, output:string) {
    return (
        <div className="terminal-output">
            <p>Manikanta$ {output}</p>
            {
                (expression.toLowerCase() !== '--help') ? (
                    <p>{expression} is an incorrect command</p>
                ) : (
                    <>
                    </>
                )
            }
            <p>These are the commands you can use:</p>
            <ul>
                <li><strong>whoami:</strong> displays information about me</li>
                <li><strong>projects:</strong> shows the projects I had done</li>
                <li><strong>contacts:</strong> gets the contact details to contact me</li>
                <li><strong>skills:</strong> displays the skills</li>
                <li><strong>experience:</strong> displays my experience</li>
                <li><strong>--help:</strong> displays commands</li>
                <li><strong>clear:</strong> clears terminal</li>
            </ul>
        </div>
    );
}
