// repo
import { CommitFile } from '../../../../../../../../src/domains/course/interfaces';

// content
import JSVariablesLesson from '../../../0-operators/4-variables/__commit';
import JSIfElseLesson from '../../0-basic/0-if-else/__commit';


const message = `
Ternary Logic in javascript
`;

export default {
	dirname: __dirname,
	name: 'JS Ternary',
	message,
	dependencies: [
		JSVariablesLesson,
		JSIfElseLesson,
	] as CommitFile[],
} as const as CommitFile;
