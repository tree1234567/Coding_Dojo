class adjencyList {
    constructor{
        this.connections =[]
        this.nodes =[]
    }

    insert(adjencyNode){
        this.nodes.push(adjencyNode);
    }
    makeRelationship(idA, idB){
        this.connections.push([idA,idB])
    }
}


class adjencyNode{
    constructor{
        this.id = id
        this.val = val
    }
}