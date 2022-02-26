// Pair programming: @hseiji and @brendsmvreal
const { transpose, mirrorMatrix } = require('./there-is-no-spoon');

const wordSearch = (letters, word) => { 
    // Checks it horizontally
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;   
        }   
    } 
    // Checks it vertically
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (v of verticalJoin) {
        if (v.includes(word)) {
            return true;
        }
    } 
    // Checks it horizontally in reverse
    const horizontalReverseJoin = mirrorMatrix(letters).map(ls => ls.join(''));
    for (l of horizontalReverseJoin) {
        if (l.includes(word)) {
            return true;  
        }
    }     
    // Checks it vertically in reverse
    const verticalReverseJoin = mirrorMatrix(transpose(letters)).map(ls => ls.join(''));
    for (v of verticalReverseJoin) {
        if (v.includes(word)) {
            return true;
        }
    }     

    return false;
}

console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], "UUPEEVU"));

module.exports = wordSearch