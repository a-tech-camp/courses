from functools import memoize
import pdb

@memoize()
def fibonacci(n):
	print(n)
	pdb.set_trace()
	if n == 0 or n == 1:
		return n
	return fibonacci(n - 1) + fibonacci(n - 2)
#         4(3)
#       /     \
#     3(2)      2(1)
#    /  \      /    \
#   2(1) 1(1) 1(1)  0(0)
#  /    \
# 1(1)   0(0)
def fibonacci2(n):
	if n == 0 or n == 1:
		return n
	value = fibonacci(n - 1) + fibonacci(n - 2)
	print(n)
	return value

def fibonacci3(n):
	if n == 0 or n == 1:
		return n
	value1 = fibonacci(n - 1)
	print(n)
	value2 = fibonacci(n - 2)
	return value1 + value2

fibonacci(4)