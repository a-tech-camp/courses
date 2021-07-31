

class Node {
	constructor(id) {
		this.id = id;
	}
}

class Edge {
	constructor(node1, node2) {
		this.node1 = node1;
		this.node2 = node2;
	}
}

class EdgeGraph {
	constructor(edges) {
		this.edges = edges;
	}
}