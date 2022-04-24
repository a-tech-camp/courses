// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import ColumnDrop from '../2-column-drop/__commit';

const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'MultiColumn',
	message,
	dependencies: [
		ColumnDrop,
	] as CommitFile[],
} as const as CommitFile;
