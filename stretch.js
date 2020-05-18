// (function(){
//     var a = b = 3;
//   })();
//   console.log("a defined? " + (typeof a !== 'undefined'));
//   console.log("b defined? " + (typeof b !== 'undefined'));
//   console.log(b);

  //Part 2

  function createBase(baseNumber){
      return function(N) {
          baseNumber + N;
      }
  }
  var addSix = createBase(6);
console.log(addSix(10)) // returns 16
console.log(addSix(21)) // returns 27