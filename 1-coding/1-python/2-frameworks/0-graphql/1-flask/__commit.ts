// repo
import { CommitFile } from '../../../../../../../src/domains/course/interfaces';

// content
import PythonClasses from '../../../1-fundamentals/2-class/__commit';


const message = `
Intro to web servers with flask
`;

export default {
	dirname: __dirname,
	name: 'python flask',
	message,
	dependencies: [
		PythonClasses,
	] as CommitFile[],
} as const as CommitFile;
