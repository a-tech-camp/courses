// repo
import { CommitFile } from '../../../../../../../src/domains/course/interfaces';

// content
import PythonClasses from '../../../1-fundamentals/2-class/__commit';


const message = `
Intro to graphql in python using graphene
`;

export default {
	dirname: __dirname,
	name: 'python graphql',
	message,
	dependencies: [
		PythonClasses,
	] as CommitFile[],
} as const as CommitFile;
