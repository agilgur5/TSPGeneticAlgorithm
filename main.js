var distance_matrix = create_distance_matrix(city_coords2);
var initial_path = create_random_path(city_coords2);
var results = hill_climb(initial_path, distance_matrix, 10000);
console.log(results);