// repo
import { CommitFile } from '../../../../../../../../src/domains/course/interfaces';

// content
import JSVariablesLesson from '../../../0-operators/4-variables/__commit';
import JSFunctionLesson from '../../0-basic/1-functions/__commit';

const message = `
binding functions in javascript
`;

// TODO move this to depend on objects

export default {
	dirname: __dirname,
	name: 'JS Binding',
	message,
	dependencies: [
		JSVariablesLesson,
		JSFunctionLesson,
	] as CommitFile[],
} as const as CommitFile;
