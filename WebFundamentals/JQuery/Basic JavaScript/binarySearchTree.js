function BSTNode(val) {
    this.val = val;
    this.right = null;
    this.left = null;
}

class BST {
    constructor() {
        this.root = null
    }
    insert(val) {
        if (!this.root) {
            this.root = new BSTNode(val);
        } else {
            var current = this.root;
            while (true) {
                // console.log("current.value", current.val)
                if (val > current.val && current.right) {
                    current = current.right; //traverse to the right
                } else if (val > current.val) {
                    current.right = new BSTNode(val); //insert value in new node
                    return true
                } else if (val < current.val && current.left) {
                    current = current.left; //traverse to the left
                } else if (val < current.val) {
                    current.left = new BSTNode(val); //insert value in new node
                    return true
                } else {
                    return false // current.val was equal to val, no duplicates allowed
                }
            }
        }
    }
    printsorted(root=this.root){
        if(root.left != null){
             this.printsorted(root.left);    
        }
        console.log(root.val)
        if(root.right != null){
             this.printsorted(root.right);   
        }
    }

}

var x = new BST

x.insert(8)
x.insert(10)
x.insert(16)
x.insert(4)
x.insert(2)
x.insert(6)
x.insert(17)
x.insert(3)
x.insert(20)

x.printsorted();

