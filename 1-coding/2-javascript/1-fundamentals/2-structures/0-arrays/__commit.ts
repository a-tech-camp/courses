// repo
import { CommitFile } from '../../../../../../../src/domains/course/interfaces';

// content
import JSVariablesLesson from '../../0-operators/4-variables/__commit';

const message = `
Arrays in Javascript
`;

export default {
	dirname: __dirname,
	name: 'JS Arrays',
	message,
	dependencies: [
		JSVariablesLesson,
	] as CommitFile[],
} as const as CommitFile;
