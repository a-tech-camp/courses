// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

import Welcome from '../../../0-getting-started/0-welcome/__commit';

const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Create React App',
	message,
	dependencies: [
		Welcome,
	] as CommitFile[],
} as const as CommitFile;
