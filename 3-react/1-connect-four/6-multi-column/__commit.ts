// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import Grid from '../3-grid/__commit';
import DropColumn from '../5-column-drop/__commit';

const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'MultiColumn',
	message,
	dependencies: [
		Grid,
		DropColumn,
	] as CommitFile[],
} as const as CommitFile;
