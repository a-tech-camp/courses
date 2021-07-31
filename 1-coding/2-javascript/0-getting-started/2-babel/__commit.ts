// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import NPMLesson from '../1-npm/__commit';


const message = `
Intro to babel
`;

export default {
	dirname: __dirname,
	name: 'Babel',
	message,
	dependencies: [
		NPMLesson,
	] as CommitFile[],
} as const as CommitFile;
