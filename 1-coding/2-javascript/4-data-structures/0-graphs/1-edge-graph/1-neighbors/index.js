

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
	constructor(nodes, edges) {
		this.nodes = nodes;
		this.edges = edges;
	}

	neighbors(node) {
		return this.edges.filter(
			edge => edge.node1 === node,
		).map(
			edge => edge.node2,
		);
	}
}