// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import FirstLesson from '../../../0-getting-started/0-welcome/__commit';
import TerminalLesson from '../../../0-getting-started/2-terminal/__commit';
import BashGettingStarted from '../0-getting-started/__commit';
import BashNavigation from '../1-navigation/__commit';
import BashExecution from '../2-execution/__commit';


const message = `
show the commands for interacting across a internet network
`;

export default {
	dirname: __dirname,
	name: 'Bash Networking',
	message,
	dependencies: [
		FirstLesson,
		TerminalLesson,
		BashGettingStarted,
		BashNavigation,
		BashExecution,
	] as CommitFile[],
} as const as CommitFile;
