// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import Column from '../2-column/__commit';
import SlotColor from '../4-slot-color/__commit';

const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Column Drop',
	message,
	dependencies: [
		Column,
		SlotColor,
	] as CommitFile[],
} as const as CommitFile;
