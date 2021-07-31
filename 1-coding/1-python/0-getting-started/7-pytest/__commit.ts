// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import TestingLesson from '../../../../0-getting-started/4-testing/__commit';
import PythonGettingStarted from '../0-terminal/__commit';
import VirtualEnvGettingStarted from '../2-virtual-env/__commit';

const message = `
PyTest is the testing tool.
`;

export default {
	dirname: __dirname,
	name: 'PyTest',
	message,
	dependencies: [
		PythonGettingStarted,
		TestingLesson,
		VirtualEnvGettingStarted,
	] as CommitFile[],
} as const as CommitFile;
