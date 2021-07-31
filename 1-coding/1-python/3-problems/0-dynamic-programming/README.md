# Dynamic Programming

Dynamic programming is a programming method for optimization problems. In it we try to define the problem in a way that leads to our algorithm finding an efficient solution. I like to think of dynamic programming as accurately defining a problem (or defining it alternatively).

I believe the term dynamic refers to the program dynamically finding which possible step to take in execution dynamically.

## Solutions
### Brute Force
These problems usually have a brute force solution that involves executing all possible sets to find their value and then doing a corresponding aggregate (usually a min or a max).

### Greedy Algorithms
Greedy algorithms will take the most optimum step at a given iteration and accept it. As such it will not explore the entire solution space leading to an unoptomized solution if that.

### Dynamic Programming
The dynamic programming solution will usually define a path of traversal for testing out these sets. We will structure our exploration of the possible sets in such a way that my answer to a question about a given set can give me answers about other corresponding sets.

### Mathematical
Sometimes these problems can be solved mathematically. This usually requires linear functions in the problems definition and as such will be solved with some of linear algebra's methods. They thing that often limits the mathematical side of the solution is a discrete constraint. If the constraints were continuous and differentiable then we could simply optimize the constraints and not have to explore solutions.

## Examples
### Minimum travel distance
As a real world example, think of traveling from New York southwest to Philadelphia. Given data about the roads we can try all paths that take us 1 mile away, see if we reached Philadelphia, and increment our distance until we do. This algorithm has us exploring many inefficient paths including ones that end up on Connecticut and Long Island. If, however, we also have a way to see how close the end of our path is to Philadelphia, then as soon as our potential path starts moving to the northeast, we can deprioritize it. That's not to say the algorithm will not explore it. Roads are not always direct from A to B. If you started in Manhattan driving directly to Philadelphia, you would end up at the tip of the island and not near one of the islands exits (tunnels or bridges). Our algorithm will look something as follows.
 - we take our location and find our direct distance to philadelphia (as the crow flies)
 - we take our location and our total distance (at the moment just direct distance) and put into an array
 - we take from the array until we have reached our destination
   - we find all paths that take us a mile of driving away from the given location
     - we take this new location and find a new direct distance
	 - we take the direct distance, add it to the distance traveled to get to this point and put the (total distance x location) into our array
	   - we keep the array sorted by total distance so we only explore the most relevant paths
	   - paths that lead to the same (total distance x location) are recombined since we only proceed from that point once (and it can never be added since total distance grows)

* Take a note of the importance the role of this new direct distance variable plays in making this problem solved faster. The introduction of new information or variables will often play a critical role in making a problem dynamic.

* Take a note of how this could be turned into a mathematical problem. If we simplified the problem to be on a smooth surface without roads or obstacles, all we would need is a direct path to Philadelphia. The discrete constraint of roads and bodies of water make this problem difficult.

* The point of exploring 1 mile is a simplifying of the algorithm to show a bigger picture. The real algorithm will operate street by street, exit by exit (so many paths)

* As code the above algorithm will look something like the following:
```py
def direct_distance_to_philadelphia(location):
	'algorithm that solves the direct distance via the coordinates'
	pass

def explore_paths(location):
	'return a set of new locations 1 mile away'
	pass

def orderlist_list_insert(list, value):
	'''
	insert into a list and maintain a given ordering (priority queue)
	dont include values already inserted
	'''
	pass

def min_distance_to_philadelphia(location):
	'algorithm we are implementing to find the minimum driving distance'
	direct_distance = direct_distance_to_philadelphia(location)
	paths = [ location, direct_distance + 0, 0 ]
	while len(paths) > 0:
		location, total_distance, distance_traveled = paths.pop() # pop? take the smalled correponding distance
		for new_location in expore_paths(location):
			total_distance = direct_distance_to_philadelphia(new_location) + distance_traveled + 1
			ordered_list_insert(
				paths,
				[ new_location, total_distance, distance_traveled + 1 ]
			)
```
### Fibonacci

f(n) = f(n - 1) + f(n - 2)
where
 - f(1) = 1
 - f(0) = 0

It looks like a recursive problem because it is
```py
def fibonacci(n):
	if n == 0 or n == 1:
		return n
	return fibonacci(n - 1) + fibonacci(n - 2)
```

The above solution would work but actually end up being terribly inefficent


