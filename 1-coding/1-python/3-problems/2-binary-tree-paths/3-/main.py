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

        higherOrderDiffs = [
            root.left,
            root.right
        ]
        for j, child in enumerate(higherOrderDiffs):
            diff = [
                higherOrderDiffs[j].left,
                higherOrderDiffs[j].right,
            ]
            for i, grandChild in enumerate(diff):
                arr[i + j * 2] = threeDigitBinary([
                    root.val,
                    child.val,
                    grandChild.val,
                ])


        return sum(arr)
