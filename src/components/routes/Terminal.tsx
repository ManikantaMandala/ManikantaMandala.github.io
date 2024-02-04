import { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import {education} from '../../scripts/education';
import {experience} from '../../scripts/experience';
import {skills} from '../../scripts/skills';
import {contacts} from '../../scripts/contacts';
import {projects} from '../../scripts/projects';
import shortDescription from '../../scripts/shortDescription';

import generateProjects from '../Terminal/generateProjects';
import generateContacts from '../Terminal/generateContacts';
import generateEducation from '../Terminal/generateEducation';
import generateExperience from '../Terminal/generateExperience';
import generateSkills from '../Terminal/generateSkills';
import generateHelp from '../Terminal/generateHelp';

const TerminalController = () => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>
        <div>
            <h4> 
                Hello everyone 
            </h4>
            <p>To get help in command use 'help' command </p>
        </div>
    </TerminalOutput>
  ]);
  return (
      <div className="container" id='terminal-container' >
          <Terminal 
          name='Terminal'
          colorMode={ ColorMode.Dark } 
          onInput={ terminalInput => terminalCommands(terminalInput, setTerminalLineData)}>
          { terminalLineData }
          </Terminal>
      </div>
  )
};

function terminalCommands(expression:string, setOutput: any){
    switch(expression.toLowerCase()){
        case 'clear':
            setOutput();
            break;
        case 'whoami':
            const whoami = (
                <div>
                <h4> Manikanta Mandala </h4>
                <p> {shortDescription} </p>
                </div>
            );
            setOutput(whoami);
            break;
        case 'info':
            setOutput(shortDescription);
            break;
        case 'projects':
            setOutput(generateProjects(projects));
            break;
        case 'contacts':
            setOutput(generateContacts(contacts));
            break;
        case 'education':
            setOutput(generateEducation(education));
            break;
        case 'skills':
            setOutput(generateSkills(skills));
            break;
        case 'experience':
            setOutput(generateExperience(experience));
            break;
        default:
            setOutput(generateHelp(expression));
        break;
    }
}

export default TerminalController;
