// swap mutation: swaps the position of two elements in the current path
function swap_mutation(path) {
  var new_path = path.slice(); // clone
  // get two random indices to swap
  var swappedIndex1 = Math.floor(Math.random() * new_path.length);
  var swappedIndex2 = Math.floor(Math.random() * new_path.length);
  // swap the indices
  var temp = new_path[swappedIndex1];
  new_path[swappedIndex1] = new_path[swappedIndex2];
  new_path[swappedIndex2] = temp;
  return new_path;
}

// insertion mutation: moves one element into a position immediately before another, then shifts everything over
function insertion_mutation(path) {
  var new_path = path.slice(); // clone
  // get two random indices
  var insertedIndex = Math.floor(Math.random() * new_path.length);
  var indexToInsertAt = Math.floor(Math.random() * new_path.length);
  // perform insertion
  var next = new_path[indexToInsertAt];
  new_path[indexToInsertAt] = new_path[insertedIndex];
  // shift everything by 1 now
  for(var i = indexToInsertAt + 1; i < new_path.length; i++) {
    var temp = next;
    next = new_path[i];
    new_path[i] = temp;
  } // end for
  for(var i = 0; i < indexToInsertAt; i++) {
    var temp = next;
    next = new_path[i];
    new_path[i] = temp;
  } // end for
  return new_path;
}

// reversal mutation: gets two indices and reverses the order of the elements in between them
function reversal_mutation(path) {
  var new_path = path.slice(); // clone
  // get two random indices
  var index1 = Math.floor(Math.random() * new_path.length);
  var index2 = Math.floor(Math.random() * new_path.length);
  // ensure that index2 is the larger one
  if(index1 > index2) {
    var temp = index2;
    index2 = index1;
    index1 = temp;
  } // end if
  // reverse the elements
  for(var i = 0; i < index2 - index1; i++) {
    var temp = new_path[index2 - i];
    new_path[index2 - i] = new_path[index1 + i];
    new_path[index1 + i] = temp;
  } // end for
  return new_path;
}