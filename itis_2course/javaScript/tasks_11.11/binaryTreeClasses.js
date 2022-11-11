class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor() {
        this.root = null;
    }
    add(value){
        const addedNode = new Node(value);
        if(!this.root){
            this.root = addedNode;
            return;
        }
        let curNode = this.root;
        while(curNode){
            if(addedNode.value < curNode.value){
                if(!curNode.left){
                    curNode.left = addedNode;
                    return;
                }
                curNode = curNode.left;
            } else {
                if(!curNode.right){
                    curNode.right = addedNode;
                    return;
                }
                curNode = curNode.right;
            }
        }
    }

    makeBFS(callback){
        let queue = [this.root];
        while(queue.length){
            const node = queue.shift();
            callback(node);

            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
    }


    makeDFS(callback, method){
        if(method === "preOrder"){
            return this.preOrder(this.root, callback);
        }
        if(method === "postOrder"){
            return this.postOrder(this.root, callback);
        }
        return this.inOrder(this.root, callback);
    }
    preOrder(node, callback){
        if (!node){
            return;
        }
        if (callback){
            callback(node);
        }
        this.preOrder(node.left, callback);
        this.preOrder(node.right, callback);
    }
    postOrder(node, callback){
        if (!node){
            return;
        }
        this.postOrder(node.left, callback);
        this.postOrder(node.right, callback);
        if (callback){
            callback(node);
        }
    }
    inOrder(node, callback){
        if (!node){
            return;
        }
        this.inOrder(node.left, callback);
        if (callback) {
            callback(node);
        }
        this.inOrder(node.right, callback);
    }

}

let tree = new BinaryTree();
tree.add(6);
tree.add(8);
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(3);
tree.add(10);
tree.add(20);
tree.add(4);
console.log(tree);

console.log('DFS preOrder')
tree.makeDFS((node) =>
    {console.log(node.value)}, "preOrder");

console.log('DFS postOrder')
tree.makeDFS((node) =>
{console.log(node.value)}, "postOrder");

console.log('DFS inOrder')
tree.makeDFS((node) =>
{console.log(node.value)}, "inOrder");

console.log('BFS')
tree.makeBFS((node) => {console.log(node.value)});