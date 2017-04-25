function ClozeCard(text, cloze) {
  this.text = text,
  this.cloze = cloze
};

ClozeCard.prototype.showCloze = function () {
  console.log(this.cloze);
};

ClozeCard.prototype.showPartial = function () {
  if (this.text.indexOf(this.cloze) >= 0) {
    var newText = this.text.replace(this.cloze, "...");
    console.log(newText);
  }
};

ClozeCard.prototype.showText = function () {
  console.log(this.text);
};

var myself = new ClozeCard("I figured it out", "out");
myself.showCloze();
myself.showPartial();
myself.showText();
