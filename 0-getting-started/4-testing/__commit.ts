// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../src/domains/course/interfaces';

// content
import FirstCommit from '../0-welcome/__commit';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Testing',
	message,
	dependencies: [
		FirstCommit,
	] as CommitFile[],
} as const as CommitFile;
