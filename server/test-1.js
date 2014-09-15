var assert = require("assert"),
    telOp = require('./exercise-1.js'),
    expect = require('chai').expect;

describe('tezzt', function() {

  var t = new telOp(1,2);

  it('test plus', function() {
      expect(t.sum).to.equal(3);
  });
});


/**
 * TODO #1: verzin betekenisvolle tekst
 * TODO #2: test op het bestaan van property 'sum'
 * TODO #3: pas de functie telOp aan zodat er een error opgeworpen wordt als a of b < 0
 * TODO #4: pas de functie telOp aan zodat er een error opgeworpen wordt als a of b > 100
 * TODO #5: voeg de static-analyzer toe aan de repo
 */
