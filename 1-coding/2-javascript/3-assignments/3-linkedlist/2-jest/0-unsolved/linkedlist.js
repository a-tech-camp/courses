
class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null; // unnecessary but often nice to explicitly say
	}
}

new ListNode();

/**
 * LinkedList implementation
 * 
 * This solution does not handle exceptions
 */
export default class LinkedList {

	push(value) {
		throw Error(`Unimplemented: add ${ value } to the Linked List`);
	}

	remove(index) {
		throw Error(`Unimplemented: remove the ${ index }th node`);
	}

	get(index) {
		throw Error(`Unimplemented: get the value of the ${ index }th node`);
	}

	size() {
		throw Error('Unimplemented: cannot get size');
	}
}

