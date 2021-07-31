// global
import fs from 'fs';
import csv from 'csv-parser';


export default class Inventory {

	constructor(filename) {
		if (!filename) {
			throw Error('No filename');
		}

		this.filename = filename;
	}

	async records() {
		if (!this._records) {
			this._records = await new Promise((resolve, reject) => {
				const results = [];
				fs.createReadStream(this.filename)
					.pipe(csv())
					.on('data', (data) => results.push(data))
					.on('error', reject)
					.on('end', () => resolve(results));
			});

			if (! this._records.length) {
				throw Error(`Could not open ${this.filename}`);
			}
		}

		return this._records;
	}

	async numStates() {
		throw Error('Unimplemented');
	}

	async dollarVolumeByState() {
		throw Error('Unimplemented');
	}
}
