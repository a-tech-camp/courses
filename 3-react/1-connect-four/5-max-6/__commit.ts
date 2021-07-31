// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import ColumnDrop from '../4-column-drop/__commit';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Max 6 columns',
	message,
	dependencies: [
		ColumnDrop,
	] as CommitFile[],
} as const as CommitFile;
