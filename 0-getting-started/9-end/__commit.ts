// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../src/domains/course/interfaces';

// content
import FirstCommit from '../0-welcome/__commit';
import Terminal from '../2-terminal/__commit';
import Git from '../3-requirements/0-git/__commit';
import Docker from '../3-requirements/1-docker/__commit';
import Editors from '../3-requirements/2-editors/__commit';
import Testing from '../4-testing/__commit';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'End of Getting Started',
	branchName: 'lesson-2',
	message,
	dependencies: [
		FirstCommit,
		Terminal,
		Git,
		Docker,
		Editors,
		Testing,
	] as CommitFile[],
} as const as CommitFile;
