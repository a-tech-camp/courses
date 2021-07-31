// repo
import { CommitFile } from '../../../../../../../../src/domains/course/interfaces';

// content
import JSVariables from '../../../0-operators/4-variables/__commit';

const message = `
Using functions to create brancing logic
`;

export default {
	dirname: __dirname,
	name: 'JS functions',
	message,
	dependencies: [
		JSVariables,
	] as CommitFile[],
} as const as CommitFile;
