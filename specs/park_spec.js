const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50); 
    park = new Park('Jurrasic Park', 25, dinosaur)
  })

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic Park');
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 25)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur)
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur])
  });


  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    dinosaur.findMostVistors(dinosaur);
    const actual = dinosaur.guestsAttractedPerDay;
    assert.strictEqual(actual, 't-rex', 'carnivore', 50)
  });


  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
