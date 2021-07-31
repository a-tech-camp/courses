// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import FinishGettingStarted from '../../../0-getting-started/9-end/__commit';
import NPM from '../../../1-coding/2-javascript/0-getting-started/1-npm/__commit';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Typescript Intro',
	branchName: 'typescript',
	message,
	dependencies: [
		FinishGettingStarted,
		NPM,
	] as CommitFile[],
	removeFiles: [
		'index.js',
	] as string[],
} as const as CommitFile;
