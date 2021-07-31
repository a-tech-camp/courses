// repo
import { CommitFile } from '../../../../../../src/domains/course/interfaces';

// content
import NPMLesson from '../../0-getting-started/1-npm/__commit';

const message = `
Using npm to manages packages and run scripts.
`;

export default {
	dirname: __dirname,
	name: 'Discord.js',
	message,
	branchName: 'discord-bot.js',
	dependencies: [
		NPMLesson,
	] as CommitFile[],
} as const as CommitFile;
