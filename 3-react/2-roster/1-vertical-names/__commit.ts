// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import Names from '../0-names/__commit';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Vertical Names',
	message,
	dependencies: [
		Names,
	] as CommitFile[],
} as const as CommitFile;
