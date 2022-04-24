// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../src/domains/course/interfaces';

// content
import Root from '../../0-getting-started/00-root/__commit';

const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Create React App',
	message,
	dependencies: [
		Root,
	] as CommitFile[],
} as const as CommitFile;
