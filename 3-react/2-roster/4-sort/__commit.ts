// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import Map from '../3-map/__commit';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: '',
	message,
	dependencies: [
		Map,
	] as CommitFile[],
} as const as CommitFile;
