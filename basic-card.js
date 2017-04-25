function BasicCard(front, back) {
  this.front = front,
  this.back = back
};

var myself = new BasicCard("What is my name?", "GT");
console.log(myself.front);
console.log(myself.back);
