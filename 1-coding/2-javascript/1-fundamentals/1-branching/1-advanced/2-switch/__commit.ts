// repo
import { CommitFile } from '../../../../../../../../src/domains/course/interfaces';

// content
import JSVariablesLesson from '../../../0-operators/4-variables/__commit';
import JSIfElseLesson from '../../0-basic/0-if-else/__commit';


const message = `
Switch Statements in javascript
`;

export default {
	dirname: __dirname,
	name: 'JS Switch',
	message,
	dependencies: [
		JSVariablesLesson,
		JSIfElseLesson,
	] as CommitFile[],
} as const as CommitFile;
