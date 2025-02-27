const transpose = function (matrix) {
    const newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (!newMatrix[j]){
          newMatrix[j] = [];
        }
        newMatrix[j].push(matrix[i][j]);
      }
    }
    return newMatrix;
};


const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (v of verticalJoin) {
        if (v.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch