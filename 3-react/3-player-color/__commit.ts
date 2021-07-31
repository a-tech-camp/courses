// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import TogglePlayer from '../2-toggle-player/__commit';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Player Color',
	message,
	dependencies: [
		TogglePlayer,
	] as CommitFile[],
} as const as CommitFile;
