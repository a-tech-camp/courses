// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import FirstLesson from '../../../0-getting-started/0-welcome/__commit';
import TerminalLesson from '../../../0-getting-started/2-terminal/__commit';
import BashGettingStarted from '../0-getting-started/__commit';
import BashNavigation from '../1-navigation/__commit';

const message = `
show the commands for affecting your computer system with bash commands
`;

export default {
	dirname: __dirname,
	name: 'Bash Manipulation',
	message,
	dependencies: [
		FirstLesson,
		TerminalLesson,
		BashGettingStarted,
		BashNavigation,
	] as CommitFile[],
} as const as CommitFile;
