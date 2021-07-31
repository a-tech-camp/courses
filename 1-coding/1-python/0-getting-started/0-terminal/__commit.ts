// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import FinishGettingStarted from '../../../../0-getting-started/9-end/__commit';

const message = `
Learn how to print hello world in python using the terminal application.
`;

export default {
	dirname: __dirname,
	name: 'Python',
	message,
	dependencies: [
		FinishGettingStarted,
	] as CommitFile[],
} as const as CommitFile;
