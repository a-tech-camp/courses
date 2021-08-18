// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import MultiColumn from '../6-multi-column/__commit';

const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Board',
	message,
	dependencies: [
		MultiColumn,
	] as CommitFile[],
	branchName: 'connect-4'
} as const as CommitFile;
