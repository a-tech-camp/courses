// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import Column from '../2-column/__commit';

const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Grid',
	message,
	dependencies: [
		Column,
	] as CommitFile[],
} as const as CommitFile;
