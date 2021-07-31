
import LinkedList from './linkedlist';



let zeroThruNine;
beforeEach(() =>{
	zeroThruNine = new LinkedList();

	zeroThruNine.push(0);
	zeroThruNine.push(1);
	zeroThruNine.push(2);
	zeroThruNine.push(3);
	zeroThruNine.push(4);
	zeroThruNine.push(5);
	zeroThruNine.push(6);
	zeroThruNine.push(7);
	zeroThruNine.push(8);
	zeroThruNine.push(9);
});


test('LinkedList has expected size', async () => {
	expect(zeroThruNine.size()).toBe(10);
});

test('LinkedList has expected elements', async () => {
	expect(zeroThruNine.get(0)).toBe(0);
	expect(zeroThruNine.get(1)).toBe(1);
	expect(zeroThruNine.get(2)).toBe(2);
	expect(zeroThruNine.get(3)).toBe(3);
	expect(zeroThruNine.get(4)).toBe(4);
	expect(zeroThruNine.get(5)).toBe(5);
	expect(zeroThruNine.get(6)).toBe(6);
	expect(zeroThruNine.get(7)).toBe(7);
	expect(zeroThruNine.get(8)).toBe(8);
	expect(zeroThruNine.get(9)).toBe(9);
});

test('LinkedList can delete ', async () => {
	zeroThruNine.remove(2);
	expect(zeroThruNine.get(0)).toBe(0);
	expect(zeroThruNine.get(1)).toBe(1);
	expect(zeroThruNine.get(2)).toBe(3);
	expect(zeroThruNine.get(3)).toBe(4);
	expect(zeroThruNine.get(4)).toBe(5);
	expect(zeroThruNine.get(5)).toBe(6);
	expect(zeroThruNine.get(6)).toBe(7);
	expect(zeroThruNine.get(7)).toBe(8);
	expect(zeroThruNine.get(8)).toBe(9);
});

