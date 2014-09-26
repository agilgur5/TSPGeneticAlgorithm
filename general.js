/* 
General Functions for TSP
*/

// creates distance matrix from array of coordinates
function create_distance_matrix(coord_array) {
  var distance_matrix = [];
  for(var i = 0; i < coord_array.length; i++) {
    distance_matrix.push([]);
    for(var j = 0; j < coord_array.length; j++) {
      var distance = calculate_distance(coord_array[i], coord_array[j]);
      // if the distance is 0, that is, these are the same point, "punish" this selection by setting this distance to the max it can be (JavaScript does not have "overflow", the number just can't go higher if added to)
      if(distance == 0) {
        distance = Number.MAX_VALUE;
      } // end if
      distance_matrix[i].push(distance);
    } // end for
  } // end for
  return distance_matrix;
}

// calculates distance between two coordinates
function calculate_distance(coord1, coord2) {
  return Math.sqrt(Math.pow(coord1.x - coord2.x, 2) + Math.pow(coord1.y - coord2.y, 2));
}

// evaluate fitness of a path given the path length -> fitness = 1 / path length
function evaluate_fitness_of_path_length(path_length) {
  return 1 / path_length;
}

// gets the length of the path
function get_path_length(path, distance_matrix) {
  console.log(path);
  var path_length = 0;
  for(var i = 0; i < path.length - 1; i++) {
    path_length += distance_matrix[path[i].index][path[i+1].index]; // referenced by their index properties
  } // end for 
  // the first element is also the element the path should end on (full tour)
  path_length += distance_matrix[path[path.length - 1].index][path[0].index];
  return path_length;
}

// creates a random path from the given array of coordinates
function create_random_path(coord_array) {
  var path = [];
  // until the path is the length of the coordinate array
  while(path.length < coord_array.length) {
    var index = Math.floor(Math.random() * coord_array.length);
    // if the randomly selected object is not already in the path, add it (no duplicates)
    if(path.indexOf(coord_array[index]) == -1) {
      coord_array[index].index = index; // set an index property
      path.push(coord_array[index]);
    } // end if
  } // end while
  return path;
}