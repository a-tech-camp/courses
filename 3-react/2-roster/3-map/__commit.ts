// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import List from '../2-list/__commit';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Map the names',
	message,
	dependencies: [
		List,
	] as CommitFile[],
} as const as CommitFile;
