import { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import { education } from '../../scripts/education';
import { experience } from '../../scripts/experience';
import { skills } from '../../scripts/skills';
// import { contacts } from '../../scripts/contacts';
import { projects } from '../../scripts/projects';
import shortDescription from '../../scripts/shortDescription';

import generateProjects from '../Terminal/generateProjects';
import generateContacts from '../Terminal/generateContacts';
import generateEducation from '../Terminal/generateEducation';
import generateExperience from '../Terminal/generateExperience';
import generateSkills from '../Terminal/generateSkills';
import generateHelp from '../Terminal/generateHelp';

const TerminalController = () => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key="initial-output">
      <div className='terminal-output'>
        <h4>Hello everyone</h4>
        <p>To get help, use the '--help' command</p>
      </div>
    </TerminalOutput>
  ]);

  return (
    <div className="container" id="terminal-container">
      <Terminal
        name="Terminal"
        colorMode={ColorMode.Dark}
        prompt="Manikanta$"
        onInput={(terminalInput) =>
          terminalCommands(terminalInput, setTerminalLineData, terminalInput)
        }
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

function terminalCommands(expression: string, setOutput: any, output: string) {
    switch (expression.toLowerCase()) {
        case 'clear':
            setOutput();
            break;
        case 'whoami':
            const whoamiOutput = (
                <div key="whoami-output" className='terminal-output'>
                    <p>Manikanta$ {output}</p>
                    <h4>Manikanta Mandala</h4>
                    <p>{shortDescription}</p>
                </div>
            );
            setOutput((prevOutput: JSX.Element[] | undefined) => {
                return prevOutput && Symbol.iterator in Object(prevOutput)
                    ? [...prevOutput, whoamiOutput]
                    : [whoamiOutput];
            });
            break;
        case 'projects':
            const projectOutput = generateProjects(projects, output);
            setOutput((prevOutput: JSX.Element[] | undefined) => {
                return prevOutput && Symbol.iterator in Object(prevOutput)
                    ? [...prevOutput, projectOutput]
                    : [projectOutput];
            });
            break;
        case 'contacts':
            const contactsOutput = generateContacts(/*contacts,*/ output);

            setOutput((prevOutput: JSX.Element[] | undefined) => {
                return prevOutput && Symbol.iterator in Object(prevOutput)
                    ? [...prevOutput, contactsOutput]
                    : [contactsOutput];
            });
            break;
        case 'education':
            const educationOutput = generateEducation(education, output);
            console.log(educationOutput);
            setOutput((prevOutput: JSX.Element[] | undefined) => {
                return prevOutput && Symbol.iterator in Object(prevOutput)
                    ? [...prevOutput, educationOutput]
                    : [educationOutput];
            });
            break;
        case 'skills':
            const skillsOutput = generateSkills(skills, output);
            setOutput((prevOutput: JSX.Element[] | undefined) => {
                return prevOutput && Symbol.iterator in Object(prevOutput)
                    ? [...prevOutput, skillsOutput]
                    : [skillsOutput];
            });
            break;
        case 'experience':
            const experienceOutput = generateExperience(experience, output);
            setOutput((prevOutput: JSX.Element[] | undefined) => {
                return prevOutput && Symbol.iterator in Object(prevOutput)
                    ? [...prevOutput, experienceOutput]
                    : [experienceOutput];
            });
            break;
        default:
            const helpOutput = generateHelp(expression, output);
            setOutput((prevOutput: JSX.Element[] | undefined) => {
                return prevOutput && Symbol.iterator in Object(prevOutput)
                    ? [...prevOutput, helpOutput]
                    : [helpOutput];
            });
            break;
    }
}

export default TerminalController;
