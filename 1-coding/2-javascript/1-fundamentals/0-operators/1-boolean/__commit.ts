// repo
import { CommitFile } from '../../../../../../../src/domains/course/interfaces';

// content
import JSHelloWorldLesson from '../0-hello-world/__commit';


const message = `
Boolean logic in javascript
`;

export default {
	dirname: __dirname,
	name: 'JS Booleans',
	message,
	dependencies: [
		JSHelloWorldLesson,
	] as CommitFile[],
} as const as CommitFile;
