// truncation selection -- takes only the top percentage of individuals
function truncation_selection(path_array, percentage, distance_matrix) {
  var new_path_array = path_array.slice(); // new array to return
  var max_individuals = Math.floor(new_path_array.length * percentage);
  new_path_array.sort(function(path1, path2) {
    var path1_fitness = evaluate_fitness_of_path_length(get_path_length(path1, distance_matrix));
    var path2_fitness = evaluate_fitness_of_path_length(get_path_length(path2, distance_matrix));
    if(path1_fitness > path2_fitness) {
      return -1;
    } else {
      return 1;
    } // end else
  }); // end sort
  return new_path_array.slice(0, max_individuals); // return an array with just the best individuals
}