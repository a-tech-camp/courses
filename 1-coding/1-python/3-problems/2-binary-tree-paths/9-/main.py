# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def threeDigitBinary(digits):
    solution = 0
    for digit in digits:
        solution *= 2
        solution += digit
    return solution



class Solution:

    @staticmethod
    def solve(node):
        Solution.digits.append(node.val)
        if node.left:
            Solution.solve(node.left)
            Solution.digits.pop(-1)
        if node.right:
            Solution.solve(node.right)
            Solution.digits.pop(-1)
        if not node.right and not node.left:
            Solution.arr.append(threeDigitBinary(Solution.digits))


    def sumRootToLeaf(self, root: TreeNode) -> int:
        Solution.arr = []
        Solution.digits = []

        Solution.solve(root)
        return sum(Solution.arr)
