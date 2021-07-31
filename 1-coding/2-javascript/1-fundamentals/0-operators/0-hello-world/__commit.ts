// repo
import { CommitFile } from '../../../../../../../src/domains/course/interfaces';

// content
import NodeLesson from '../../../0-getting-started/0-node/__commit';

const message = `
Commenting and printing in javascript
`;

export default {
	dirname: __dirname,
	name: 'Hello World in JS',
	message,
	dependencies: [
		NodeLesson,
	] as CommitFile[],
} as const as CommitFile;
