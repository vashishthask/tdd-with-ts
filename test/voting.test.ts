/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/chai/index.d.ts" />

import chai = require('chai');
import voting = require('../controllers/voting');
var expect = chai.expect;

describe('my app tests', () => {
    it('should be able to init app', ()=> {
        //Arrange

        var options = ['Awesome', 'Ok', 'Bad'];

        //Act

        voting.init(options);

        //Assert
        expect(voting.getTotalVotes()).to.be.equal(0);
    });
});