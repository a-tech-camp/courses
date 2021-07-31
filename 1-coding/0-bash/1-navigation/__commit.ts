// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import FirstLesson from '../../../0-getting-started/0-welcome/__commit';
import TerminalLesson from '../../../0-getting-started/2-terminal/__commit';
import BashGettingStarted from '../0-getting-started/__commit';

const message = `
show the commands for navigating with bash commands
`;

export default {
	dirname: __dirname,
	name: 'Bash Navigation',
	message,
	dependencies: [
		FirstLesson,
		TerminalLesson,
		BashGettingStarted,
	] as CommitFile[],
} as const as CommitFile;
