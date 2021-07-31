// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import PythonPrimitives from '../../0-getting-started/9-finish/__commit';


const message = `
A file that explains the primitive commands in python
`;

export default {
	dirname: __dirname,
	name: 'python primitives',
	message,
	dependencies: [
		PythonPrimitives,
	] as CommitFile[],
} as const as CommitFile;
