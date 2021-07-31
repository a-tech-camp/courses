
class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null; // unnecessary but often nice to explicitly say
	}
}

/**
 * LinkedList implementation
 * 
 * This solution does not handle exceptions
 */
export default class LinkedList {

	push(value) {
		const newNode = new ListNode(value);

		if (!this.head) {
			this.head = newNode;
		} else {
			// iterate to last node
			let node = this.head;
			while (node.next) {
				node = node.next;
			}

			node.next = newNode;
		}
	}

	remove(index) {
		if (index === 0) {
			this.head = this.head.next;
		} else {
			index--; // address off by one error
			let prev = this.head;
			while (index > 0) {
				index--;
				prev = prev.next;
			}

			prev.next = prev.next.next; // skip over prev.next
		}
	}

	get(index) {
		let node = this.head;
		while (index--) {
			node = node.next;
		}
		return node.value;
	}

	size() {
		let node = this.head;
		let size = 0;
		while (node) {
			node = node.next;
			size++;
		}
		return size;
	}
}

