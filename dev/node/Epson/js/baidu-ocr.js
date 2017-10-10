// var ak = '34277fe29aa24a4f8038c1b4baa20983';
// var sk = '17aa88e92da848f78ad5d03a052c09fb';

// module.exports = (width) => {
//   return {
//     area: () => width * width
//   };
// };

module.exports = function(width){
  return {
    area:function(){
      return width*width;
    }
  }
}