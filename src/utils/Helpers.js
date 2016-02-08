/**
 * Created by V_D on 1/13/2016.
 */

class Helpers {

  static findAndRemove(array, property, value) {
    array.forEach(function(result, index) {
      if(result[property] === value) {
        //Remove from array
        array.splice(index, 1);
      }
    });
    return array;
  }

}

module.exports = Helpers;