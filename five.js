// write a function to determine ifa ggiven structure is Stalactite or Stalagmite

function identifyStructure(structure) {
    for (let i = 0; i < structure.length; i++) {
        if (structure[0] == 'c') {
            return "Stalactite";
        } else if (structure[0] == 'f') {
            return "Stalagmite"
        } else {
            return "Neither";
        }
    }
}
console.log(identifyStructure("cammy"))