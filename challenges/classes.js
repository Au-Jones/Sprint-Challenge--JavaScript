// 1. Copy and paste your prototype in here and refactor into class syntax.

 class cuboidMaker {
   constructor(options){
    this.width = options.width;
    this.height = options.height;
    this.length = options.length;
  };


volume(){
  return this.width * this.height * this.length;
};

surfaceArea(){
  return 2*(this.width*this.length+this.length*this.height+this.height*this.width)
 };
};

const Cuboid = new cuboidMaker({
  width:5,
  height:5,
  length:4,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.