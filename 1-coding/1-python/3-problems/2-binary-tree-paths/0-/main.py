# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:

    def sumRootToLeaf(self, root: TreeNode) -> int:

        print('left most')
        print(root.val * 4)
        print(root.left.val * 2)
        print(root.left.left.val * 1)

        print('middle left')
        print(root.val * 4)
        print(root.left.val * 2)
        print(root.left.right.val * 1)

        print('middle right')
        print(root.val * 4)
        print(root.right.val * 2)
        print(root.right.left.val * 1)

        print('right most')
        print(root.val * 4)
        print(root.right.val * 2)
        print(root.right.right.val * 1)


        return root.val
