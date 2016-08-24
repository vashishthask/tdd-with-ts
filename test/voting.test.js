/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/chai/index.d.ts" />
"use strict";
var chai = require('chai');
var voting = require('../controllers/voting');
var expect = chai.expect;
describe('my app tests', function () {
    it('should be able to init app', function () {
        //Arrange
        var options = ['Awesome', 'Ok', 'Bad'];
        //Act
        voting.init(options);
        //Assert
        expect(voting.getTotalVotes()).to.be.equal(0);
    });
});
