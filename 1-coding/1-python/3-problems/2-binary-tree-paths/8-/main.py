# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def threeDigitBinary(digits):
    print(len(digits))
    if (len(digits) == 0):
        return 0
    if (len(digits) == 1):
        return digits[0]

    if (len(digits) == 2):
        return sum([
            digits[0] * 2,
            digits[1] * 1,
        ])
    if (len(digits) == 3):
        return sum([
            digits[0] * 4,
            digits[1] * 2,
            digits[2] * 1,
        ])
    if (len(digits) == 4):
        return sum([
            digits[0] * 8,
            digits[1] * 4,
            digits[2] * 2,
            digits[3] * 1,
        ])
    if (len(digits) == 5):
        return sum([
            digits[0] * 16,
            digits[1] * 8,
            digits[2] * 4,
            digits[3] * 2,
            digits[4] * 1,
        ])
    return 0


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
