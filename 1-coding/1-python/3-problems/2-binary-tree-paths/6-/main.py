# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def threeDigitBinary(digits):
    return sum([
        digits[0] * 4,
        digits[1] * 2,
        digits[2] * 1,
    ])


def solve(root):
    arr = []
    digits = []

    node = root
    digits.append(node.val)
    diff = [
        node.left,
        node.right
    ]
    for j, child in enumerate(diff):
        node = child
        digits.append(node.val)
        diff = [
            node.left,
            node.right,
        ]
        for i, child in enumerate(diff):
            node = child
            digits.append(node.val)

            arr.append(threeDigitBinary(digits))

            digits.pop(-1)
        digits.pop(-1)

    return sum(arr)


def solve(root):
    arr = []
    digits = []
    node = root

    digits.append(node.val)
    diff = [
        node.left,
        node.right
    ]
    for j, child in enumerate(diff):
        node = child
        digits.append(node.val)
        diff = [
            node.left,
            node.right,
        ]
        for i, child in enumerate(diff):
            node = child
            digits.append(node.val)

            arr.append(threeDigitBinary(digits))

            digits.pop(-1)
        digits.pop(-1)

    return sum(arr)
class Solution:


    def sumRootToLeaf(self, root: TreeNode) -> int:

        return solve(root)
