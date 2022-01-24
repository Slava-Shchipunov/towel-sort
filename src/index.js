
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortArray = [];
  
  matrix === undefined ? sortArray = [] : matrix.forEach((element, i) => {
    if (i % 2 === 0) {
      sortArray = sortArray.concat(element);
    } else {
      element.reverse()
      sortArray = sortArray.concat(element);
    }
  });

  return sortArray;
}
