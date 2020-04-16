const expect = require('chai').expect;
const sinon = require('sinon');

const execute = require('../');

/**
 * Js-fn unit tests.
 */

 describe('Unit Tests', () => {

    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('Invoke Js-fn', () => {
        // TODO
    });
});
