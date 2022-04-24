// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../src/domains/course/interfaces';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Root',
	message,
	dependencies: [] as CommitFile[],
	branchName: 'root',
} as const as CommitFile;
