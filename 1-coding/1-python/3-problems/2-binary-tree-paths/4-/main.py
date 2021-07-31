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

    higherOrderDiffs = [
        root.left,
        root.right
    ]
    for j, child in enumerate(higherOrderDiffs):
        diff = [
            child.left,
            child.right,
        ]
        for i, grandChild in enumerate(diff):
            arr.append(threeDigitBinary([
                root.val,
                child.val,
                grandChild.val,
            ]))

    return sum(arr)

class Solution:


    def sumRootToLeaf(self, root: TreeNode) -> int:

        return solve(root)
