// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import Grid from '../3-grid/__commit';

const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Board',
	message,
	dependencies: [
		Grid,
	] as CommitFile[],
	branchName: 'connect-4',
	publish: true,
} as const as CommitFile;
