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



        diff = [
            root.left.left.val,
            root.left.right.val,
        ]
        for i, val in enumerate(diff):
            arr[i] = threeDigitBinary([
                root.val,
                root.left.val,
                val,
            ])


        diff = [
            root.right.left.val,
            root.right.right.val,
        ]
        for i, val in enumerate(diff):
            arr[i + 2] = threeDigitBinary([
                root.val,
                root.right.val,
                val,
            ])

        return sum(arr)
