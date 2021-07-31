// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import NodeLesson from '../0-node/__commit';

const message = `
Using npm to manages packages and run scripts.
`;

export default {
	dirname: __dirname,
	name: 'NPM',
	message,
	dependencies: [
		NodeLesson,
	] as CommitFile[],
} as const as CommitFile;
