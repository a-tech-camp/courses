// repo
import { CommitFile } from '../../../../../../../src/domains/course/interfaces';

// content
import JSHelloWorldLesson from '../0-hello-world/__commit';
import JSArithamticLesson from '../2-arithmatic/__commit';

const message = `
Variables in javascript
`;

export default {
	dirname: __dirname,
	name: 'JS Variables',
	message,
	dependencies: [
		JSHelloWorldLesson,
		JSArithamticLesson,
	] as CommitFile[],
} as const as CommitFile;
