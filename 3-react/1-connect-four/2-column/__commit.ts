// global
import * as fs from 'fs-extra';

// repo
import { CommitFile } from '../../../../../src/domains/course/interfaces';

// content
import CreateReactApp from '../../0-create-react-app/__commit';


const message: string = fs.readFileSync(`${__dirname}/__message.md`).toString();

export default {
	dirname: __dirname,
	name: 'Column',
	message,
	dependencies: [
		CreateReactApp,
	] as CommitFile[],
} as const as CommitFile;
