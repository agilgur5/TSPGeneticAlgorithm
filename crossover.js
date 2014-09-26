// does a partially mapped crossover based on a single point and returns the two new children
function single_point_crossover(path1, path2) {
  var child_path1 = path1.slice(); // clone
  var child_path2 = path2.slice(); // clone
  // get a random index at which to do crossover
  var index = Math.floor(Math.random() * path1.length);
  // perform the partially mapped crossover
  for(var i = 0; i < index; i++) {
    var swapIndex = child_path1.indexOf(path2[i]);
    var temp = child_path1[swapIndex];
    child_path1[swapIndex] = child_path1[i];
    child_path1[i] = temp;
  } // end for
  for(var i = index; i < path1.length; i++) {
    var swapIndex = child_path2.indexOf(path1[i]);
    var temp = child_path2[swapIndex];
    child_path2[swapIndex] = child_path2[i];
    child_path2[i] = temp;
  } // end for
  return [child_path1, child_path2];
}

// does a partially mapped crossover based on two points and returns the two new children
function two_point_crossover(path1, path2) {
  var child_path1 = path1.slice(); // clone
  var child_path2 = path2.slice(); // clone
  // get two random indices
  var index1 = Math.floor(Math.random() * path1.length);
  var index2 = Math.floor(Math.random() * path1.length);
  // ensure that index2 is the larger one
  if(index1 > index2) {
    var temp = index2;
    index2 = index1;
    index1 = temp;
  } // end if
  // perform the partially mapped crossover
  for(var i = 0; i < index1; i++) {
    var swapIndex = child_path1.indexOf(path2[i]);
    var temp = child_path1[swapIndex];
    child_path1[swapIndex] = child_path1[i];
    child_path1[i] = temp;
  } // end for
  for(var i = index2; i < path1.length; i++) {
    var swapIndex = child_path1.indexOf(path2[i]);
    var temp = child_path1[swapIndex];
    child_path1[swapIndex] = child_path1[i];
    child_path1[i] = temp;
  } // end for
  for(var i = index1; i < index2; i++) {
    var swapIndex = child_path2.indexOf(path1[i]);
    var temp = child_path2[swapIndex];
    child_path2[swapIndex] = child_path2[i];
    child_path2[i] = temp;
  } // end for
}