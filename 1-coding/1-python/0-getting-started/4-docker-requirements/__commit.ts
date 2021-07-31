// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import DockerLesson from '../../../../0-getting-started/3-requirements/1-docker/__commit';
import PythonGettingStarted from '../0-terminal/__commit';
import PipLesson from '../1-pip/__commit';
import PythonDocker from '../3-docker/__commit';


const message = `
Dockerfile for running a python command,
`;

export default {
	dirname: __dirname,
	name: 'python docker requirements',
	message,
	dependencies: [
		DockerLesson,
		PythonGettingStarted,
		PipLesson,
		PythonDocker,
	] as CommitFile[],
} as const as CommitFile;
