// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import FirstLesson from '../../../0-getting-started/0-welcome/__commit';
import TerminalLesson from '../../../0-getting-started/2-terminal/__commit';

const message = `
start with bash file, split by windows or linux
`;

export default {
	dirname: __dirname,
	name: 'Bash',
	message,
	dependencies: [
		FirstLesson,
		TerminalLesson,
	] as CommitFile[],
} as const as CommitFile;
