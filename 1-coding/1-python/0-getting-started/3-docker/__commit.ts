// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import DockerLesson from '../../../../0-getting-started/3-requirements/1-docker/__commit';
import PythonGettingStarted from '../0-terminal/__commit';

const message = `
Dockerfile for running a python command,
`;

export default {
	dirname: __dirname,
	name: 'python docker',
	message,
	dependencies: [
		DockerLesson,
		PythonGettingStarted,
	] as CommitFile[],
} as const as CommitFile;
