// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import Max6 from '../5-max-6/__commit';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Abstract Drop',
	branchName: 'connect-4',
	message,
	dependencies: [
		Max6,
	] as CommitFile[],
} as const as CommitFile;
