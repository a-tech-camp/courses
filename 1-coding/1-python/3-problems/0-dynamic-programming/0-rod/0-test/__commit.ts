// repo
import { CommitFile } from '../../../../../../../../src/domains/course/interfaces';

// content
import PythonFunctions from '../../../../1-fundamentals/1-functions/__commit';


const message = `
A test file in python for executing the rod cutting problem
`;

export default {
	dirname: __dirname,
	name: 'Python Rod Cutting Problem',
	message,
	dependencies: [
		PythonFunctions,
	] as CommitFile[],
} as const as CommitFile;
