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

    node = root
    digits = []
    digits.append(node.val)
    higherOrderDiffs = [
        node.left,
        node.right
    ]
    for j, child in enumerate(higherOrderDiffs):
        node = child
        digits.append(node.val)
        diff = [
            node.left,
            node.right,
        ]
        for i, grandChild in enumerate(diff):
            node = grandChild
            digits.append(node.val)
            print(digits)
            print([
                root.val,
                child.val,
                grandChild.val,
            ])
            arr.append(threeDigitBinary([
                root.val,
                child.val,
                grandChild.val,
            ]))
            digits.pop(-1)
        digits.pop(-1)

    return sum(arr)

class Solution:


    def sumRootToLeaf(self, root: TreeNode) -> int:

        return solve(root)
