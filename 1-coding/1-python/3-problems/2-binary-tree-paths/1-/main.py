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



class Solution:

    def sumRootToLeaf(self, root: TreeNode) -> int:

        arr = [0,0,0,0]

        arr[0] = threeDigitBinary([
            root.val,
            root.left.val,
            root.left.left.val,
        ])

        arr[1] = threeDigitBinary([
            root.val,
            root.left.val,
            root.left.right.val,
        ])

        arr[2] = threeDigitBinary([
            root.val,
            root.right.val,
            root.right.left.val,
        ])

        arr[3] = threeDigitBinary([
            root.val,
            root.right.val,
            root.right.right.val,
        ])

        return sum(arr)
