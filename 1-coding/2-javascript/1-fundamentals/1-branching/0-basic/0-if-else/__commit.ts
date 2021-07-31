// repo
import { CommitFile } from '../../../../../../../../src/domains/course/interfaces';

// content
import JSConditionals from '../../../0-operators/3-conditionals/__commit';
import JSVariables from '../../../0-operators/4-variables/__commit';

const message = `
Conditional logic with if else in javascript
`;

export default {
	dirname: __dirname,
	name: 'JS if else',
	message,
	dependencies: [
		JSConditionals,
		JSVariables,
	] as CommitFile[],
} as const as CommitFile;
