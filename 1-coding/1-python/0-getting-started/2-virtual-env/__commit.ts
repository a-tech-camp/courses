// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import PythonGettingStarted from '../0-terminal/__commit';
import PipLesson from '../1-pip/__commit';

const message = `
Use pip to install packages on your computer
`;

export default {
	dirname: __dirname,
	name: 'pip',
	message,
	dependencies: [
		PythonGettingStarted,
		PipLesson,
	] as CommitFile[],
} as const as CommitFile;
