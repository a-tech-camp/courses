// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import PlayerTurn from '../1-player-turn/__commit';

const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Column Drop',
	message,
	dependencies: [
		PlayerTurn,
	] as CommitFile[],
} as const as CommitFile;
