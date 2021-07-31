// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import Grid from '../1-grid/__commit';

const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Column Drop',
	message,
	dependencies: [
		Grid,
	] as CommitFile[],
} as const as CommitFile;
