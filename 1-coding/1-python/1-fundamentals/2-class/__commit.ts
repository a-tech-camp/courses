// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import PythonFunctions from '../1-functions/__commit';


const message = `
A file that explains classes in python
`;

export default {
	dirname: __dirname,
	name: 'python classes',
	message,
	dependencies: [
		PythonFunctions,
	] as CommitFile[],
} as const as CommitFile;
