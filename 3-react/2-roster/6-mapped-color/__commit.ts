// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import Map from '../3-map/__commit';
import BackgroundColor from '../5-background-color/__commit';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Use a List',
	message,
	branchName: 'class-roster',
	dependencies: [
		Map,
		BackgroundColor,
	] as CommitFile[],
} as const as CommitFile;
