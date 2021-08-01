// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import VerticalNames from '../1-vertical-names/__commit';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Use a List',
	message,
	dependencies: [
		VerticalNames,
	] as CommitFile[],
} as const as CommitFile;
