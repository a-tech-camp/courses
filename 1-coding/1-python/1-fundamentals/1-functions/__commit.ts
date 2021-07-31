// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import PythonPrimitives from '../0-primitives/__commit';


const message = `
A file that explains functions in python
`;

export default {
	dirname: __dirname,
	name: 'python functions',
	message,
	dependencies: [
		PythonPrimitives,
	] as CommitFile[],
} as const as CommitFile;
