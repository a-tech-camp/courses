// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import FirstCommit from '../../0-welcome/__commit';
import TerminalCommit from '../../2-terminal/__commit';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Git',
	message,
	dependencies: [
		FirstCommit,
		TerminalCommit,
	] as CommitFile[],
} as const as CommitFile;
