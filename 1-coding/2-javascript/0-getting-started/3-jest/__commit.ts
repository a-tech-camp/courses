// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import NPMLesson from '../1-npm/__commit';


const message = `
Intro to testing with jest
`;

export default {
	dirname: __dirname,
	name: 'Jest',
	message,
	dependencies: [
		NPMLesson,
	] as CommitFile[],
} as const as CommitFile;
