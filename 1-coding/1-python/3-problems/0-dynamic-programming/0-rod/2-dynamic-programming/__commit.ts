// repo
import { CommitFile } from '../../../../../../../../src/domains/course/interfaces';

// content
import PythonRodCuttingTest from '../0-test/__commit';


const message = `
A dynamic programming solution to the rod cutting problem in python
`;

export default {
	dirname: __dirname,
	name: 'Python Rod Cutting Problem Dynamic Programming',
	message,
	dependencies: [
		PythonRodCuttingTest,
	] as CommitFile[],
} as const as CommitFile;
