/* 
Hill Climbing Algorithm.
Takes in a path, then makes random changes to it, saving the new path when a random change made the path shorter 
*/

function hill_climb(original_path, max_evaluations) {
  // initial evaluation
  var best_path = original_path.slice(); // clone
  var best_path_fitness = evaluate_fitness(best_path); // get initial fitness

  // loop through until max evaluations is reached
  for(var i = 1; i < max_evaluations; i++) {
    var path = best_path.slice(); // clone
    // get two random indices to swap
    var swappedIndex1 = Math.random() * path.length;
    var swappedIndex2 = Math.random() * path.length;
    // swap the indices
    var temp = path[swappedIndex1];
    path[swappedIndex1] = path[swappedIndex2];
    path[swappedIndex2] = temp;

    // evaluate the new path's fitness -- if it's better than the current best path, replace the best path with the new path
    var path_fitness = evaluate_fitness(path);
    if(path_fitness > best_path_fitness) {
      best_path = path;
      best_path_fitness = path_fitness;
    } // end if
  } // end for

} // end hill climb

// evaluate fitness of a path given the path length -> fitness = 1 / path length
function evaluate_fitness_of_path_length(path_length) {
  return 1 / path_length;
}

// gets the length of the path
function get_path_length(path, distance_matrix) {
  var path_length = 0;
  for(var i = 0; i < path.length - 1; i++) {
    path_length += distance_matrix[path[i]][path[i+1]];
  } // end for 
  return path_length;
}