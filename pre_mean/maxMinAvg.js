function maxMinAvg(x){
  var max = x[0];
  var min = x[0];
  var sum = 0;
  for (var i=0; i<x.length; i++){
    if (x[i] > max){
      max = x[i];
    }
    if (x[i] < min){
      min = x[i];
    }
    sum += x[i];
  }
  var avg = sum/x.length;
  console.log("The minimum is " +min+ ", the maximum is " +max+ ", and the average is " +avg+ ".");
}
maxMinAvg([1, -2, 9, 4]);