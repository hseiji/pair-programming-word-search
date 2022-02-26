const transpose = function(matrix) {
  const transposedMatrix = [];
  const rows = matrix[0].length;
  const columns = matrix.length;

  // for loop -- add as many nested arrays (rows) to transposedMatrix as there are columns (matrix.length)
  for (let i = 0; i < rows; i++) {
    transposedMatrix.push([]);
    for (let j = 0; j < columns; j++ ) {
      transposedMatrix[i].push(matrix[j][i]);
    }
  }

  return transposedMatrix;
};

// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

// printMatrix(transpose([
//     [1, 2, 3, 4],  
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4]
// ]));
  
// console.log('----')
  
// printMatrix(transpose([
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]));

// console.log('----')

// printMatrix(transpose([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));

module.exports = { transpose };