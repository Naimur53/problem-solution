
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const output: number[][] = []
    for (const desc of descriptions) {
        const val = desc[0]
        const child = desc[1]
        const isLeft = desc[2] === 1
        const checkIndex = output.findIndex(single => val === single[0])
        if (checkIndex === -1) {
            // chek child extis
            const checkChildExists = output.findIndex(single => child === single[0])
            if (checkChildExists === -1) {
                output.push(desc)
            } else {
                output.splice(checkChildExists, 0, desc)
            }
        } else {
            if (isLeft) {
                output.splice(checkIndex, 0, desc)
            } else {
                output.splice(checkIndex + 1, 0, desc)
            }


        }
    }
    // console.log(output)
    let tree: TreeNode | null = null;
    for (let i = 0; i < output.length; i++) {
        const element = output[i];
        const val = element[0]
        const child = element[1]
        const isLeft = element[2] === 1

    }

    return tree

};
function findANode(tree: TreeNode, node: number, accessString?: string): { tree: TreeNode, accessString: string[] } | null {
    let AccessString = accessString || "";
    if (tree.val === node) {
        return {
            tree,
            accessString: AccessString.split(".")
        }
    }
    if (tree.left) {
        const left = findANode(tree.left, node, AccessString + ".left")
        if (left) {
            return left
        }
    }
    if (tree.right) {
        const right = findANode(tree.right, node, AccessString + ".right")
        if (right) {
            return right
        }
    }
    return null
}
// console.log(createBinaryTree([[20, 15, 1], [20, 17, 0], [50, 20, 1], [50, 80, 0], [80, 19, 1]]))

// console.log(findANode({
//     "val": 50,
//     "left": {
//         "val": 20,
//         "left": { "val": 15, "left": null, "right": null },
//         "right": { "val": 17, "left": null, "right": null }
//     },
//     "right": {
//         "val": 80,
//         "left": { "val": 19, "left": null, "right": null },
//         "right": null
//     }
// }, 19))
// set nodes to tree

function setANodeToTree(tree: TreeNode, node: number, { val, left, right }: TreeNode): TreeNode {
    const findNode = findANode(tree, node)
    if (findNode) {
        const { tree: findNodeTree, accessString } = findNode
        let currentTree: TreeNode | null = tree
        for (const access of accessString) {
            if (currentTree && access === "left") {

                currentTree = currentTree.left
            } else if (currentTree) {
                currentTree = currentTree.right
            }
        }
        if (currentTree) {
            currentTree.val = val
            currentTree.left = left
            currentTree.right = right
        }



    }
    return tree
}


console.log(setANodeToTree({
    "val": 50,
    "left": {
        "val": 20,
        "left": { "val": 15, "left": null, "right": null },
        "right": { "val": 17, "left": null, "right": null }
    },
    "right": {
        "val": 80,
        "left": { "val": 19, "left": null, "right": null },
        "right": null
    }
}, 20, {
    "val": 199,
    "left": { "val": 19, "left": null, "right": null },
    "right": { "val": 19, "left": null, "right": null }
}))