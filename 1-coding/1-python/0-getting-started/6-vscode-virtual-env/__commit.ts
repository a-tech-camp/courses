// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import VSCodeLesson from '../../../../0-getting-started/3-requirements/2-editors/__commit';
import PythonGettingStarted from '../0-terminal/__commit';
import VirtualEnvLesson from '../2-virtual-env/__commit';

const message = `
When using a virtual environment with vscode, we want our vscode to recognize our local python installation that is within the virtual environment
`;

export default {
	dirname: __dirname,
	name: 'python vscode virtual env',
	message,
	dependencies: [
		VSCodeLesson,
		PythonGettingStarted,
		VirtualEnvLesson,
	] as CommitFile[],
} as const as CommitFile;
