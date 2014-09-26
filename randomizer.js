/*
Randomized baseline
Starts with one path, generates a random one, if the new one is better, sets the new one to be the current best
*/

function randomizer(original_path, distance_matrix, coord_array, max_evaluations) {
  // initial evaluation
  var best_path = original_path.slice(); // clone
  var best_path_length = get_path_length(best_path, distance_matrix); // get initial path length
  var best_path_fitness = evaluate_fitness_of_path_length(best_path_length); // get initial fitness

  var path_list = []; // a list of the paths, their fitnesses, and evaluation index to record and return

  // loop through until max evaluations is reached
  for(var i = 1; i < max_evaluations; i++) {
    // swap two indices
    var path = create_random_path(coord_array);
    var path_length = get_path_length(path, distance_matrix);
    // evaluate the new path's fitness -- if it's better than the current best path, replace the best path with the new path
    var path_fitness = evaluate_fitness_of_path_length(path_length);
    if(path_fitness > best_path_fitness) {
      best_path = path;
      best_path_length = path_length;
      best_path_fitness = path_fitness;
    } // end if
    path_list.push([best_path, best_path_length, best_path_fitness, i]);
    // just to track progress
    console.log([best_path, best_path_length, best_path_fitness, i]);
  } // end for

  return path_list;
}