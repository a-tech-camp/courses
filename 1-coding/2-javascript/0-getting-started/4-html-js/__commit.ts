// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import NodeLesson from '../0-node/__commit';

const message = `
Hello World in javascript and HTML.
`;

export default {
	dirname: __dirname,
	name: 'HTML & JS',
	message,
	dependencies: [
		NodeLesson,
	] as CommitFile[],
} as const as CommitFile;
