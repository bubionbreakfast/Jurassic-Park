const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}

Dinosaur.prototype.findMostVistors = function(dinosaur){
  for (const dinosaur in dinosaurs){
  const dinosaur = this.guestsAttractedPerDay(dinosaur)
  return dinosaur;
};
};
module.exports = Dinosaur;
