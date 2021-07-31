// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import FinishGettingStarted from '../../../../0-getting-started/9-end/__commit';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Node.js',
	branchName: 'node.js',
	message,
	dependencies: [
		FinishGettingStarted,
	] as CommitFile[],
} as const as CommitFile;
