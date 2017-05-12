/*
Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column is set to 0.
__________________
*/

/*
    1   2   3
    4   0   6
    0   8   9

*/

var matrix = [[1,2,3],[4,0,6],[0,8,9]];
var rowNo = [];
var colNo= [];
  var results = [];
  var M = 3;
  var N = 3;
  for (var col = 0; col < N; col++) 
  {
    var inner = [];
   //console.log("matrix[col]="+ matrix[col]);
    for (var row = 0; row < N; row++)
    {
//console.log("matrix[row]="+ matrix[row]);
      var item = matrix[row][col];
      //console.log ("item = "+ item)
        if(item ==0)
        {
            rowNo.push(row);
            colNo.push(col);

        }

    }
  }
  console.log("row_no = "+rowNo);
  console.log("col_no = "+colNo);
