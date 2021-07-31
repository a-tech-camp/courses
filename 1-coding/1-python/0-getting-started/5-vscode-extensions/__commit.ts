// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import VSCodeLesson from '../../../../0-getting-started/3-requirements/2-editors/__commit';
import PythonGettingStarted from '../0-terminal/__commit';

const message = `
Add VSCode extensions for working with python
`;

export default {
	dirname: __dirname,
	name: 'python vscode extensions',
	message,
	dependencies: [
		VSCodeLesson,
		PythonGettingStarted,
	] as CommitFile[],
} as const as CommitFile;
