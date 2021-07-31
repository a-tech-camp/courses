// repo
import { CommitFile } from '../../../../../../../src/domains/course/interfaces';

// content
import JSVariablesLesson from '../../0-operators/4-variables/__commit';
import JSFunctionLesson from '../../1-branching/0-basic/1-functions/__commit';

const message = `
Classes in Javascript
`;

export default {
	dirname: __dirname,
	name: 'JS Classes',
	message,
	dependencies: [
		JSVariablesLesson,
		JSFunctionLesson,
	] as CommitFile[],
} as const as CommitFile;
