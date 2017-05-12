/*
Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

// var matrix = [35,102,345,498]; 

var matrix = [[12,23],[34,45]];
//var matrix = [[1,2,3],[4,5,6],[7,8,9]];

  var results = [];
  var N = matrix.length;
  // we use N for both loops because we are looking at this from a  
  // column and row perspective rather than nested arrays
  for (var col = 0; col < N; col++) {
    var inner = [];
   //console.log("matrix[col]="+ matrix[col]);
    for (var row = 0; row < N; row++) {
//console.log("matrix[row]="+ matrix[row]);
      var item = matrix[row][col];
    //  console.log("item="+ item);
      inner.unshift(item);
    }
    results.push(inner);
  } 
  console.log(results);   
