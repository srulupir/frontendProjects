//task8
function doIntersection(a, b)
{
  var result = [];
  while( a.length > 0 && b.length > 0 )
  {  
     if      (a[0] < b[0] ){ a.shift(); }
     else if (a[0] > b[0] ){ b.shift(); }
     else 
     {
       result.push(a.shift());
       b.shift();
     }
  }
  return result;
}
arrA = [10,10]
arrB = [10,20]
console.log(doIntersection(arrA, arrB))