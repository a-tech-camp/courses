// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import PythonGettingStarted from '../0-terminal/__commit';
import PipLesson from '../1-pip/__commit';
import VirtualEnvLesson from '../2-virtual-env/__commit';
import DockerLesson from '../3-docker/__commit';
import DockerRequirementsLesson from '../4-docker-requirements/__commit';
import VSCodeExtensionLesson from '../5-vscode-extensions/__commit';
import VSCodeVirtualEnvLesson from '../6-vscode-virtual-env/__commit';
import PyTestLesson from '../7-pytest/__commit';


const message = `
Complete all the steps for getting python
`;

export default {
	dirname: __dirname,
	name: 'finish python',
	message,
	branchName: 'python',
	dependencies: [
		PythonGettingStarted,
		PipLesson,
		VirtualEnvLesson,
		DockerLesson,
		DockerRequirementsLesson,
		VSCodeExtensionLesson,
		VSCodeVirtualEnvLesson,
		PyTestLesson,
	] as CommitFile[],
} as const as CommitFile;
