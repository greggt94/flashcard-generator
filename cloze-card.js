function ClozeCard(text, cloze) {
  this.text = text,
  this.cloze = cloze
};

ClozeCard.prototype.showText = function () {
  console.log(this.text);
};

ClozeCard.prototype.showText = function () {
  console.log(this.cloze);
};

ClozeCard.prototype.showText = function () {
  console.log(this.cloze + " " + this.text);
};
