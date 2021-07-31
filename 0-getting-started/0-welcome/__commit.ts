// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../src/domains/course/interfaces';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Welcome',
	message,
	dependencies: [] as CommitFile[],
	branchName: 'lesson-0',
} as const as CommitFile;
