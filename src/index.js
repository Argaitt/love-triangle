/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var nextIndex, count = 0;
    for (var i = 0; i < preferences.length; i++){
 
         if ((preferences[i] - 1 == i) || (preferences[i] < 1)) continue;
         else nextIndex = preferences[i] - 1;
 
         if ((preferences[nextIndex] - 1 == nextIndex) || (preferences[nextIndex] < 1)) continue
         else nextIndex = preferences[nextIndex] - 1;
 
         if (preferences[nextIndex] - 1 != i) continue
         else count++;
 
    } 
    return count / 3;
};
