import { describe, it } from 'node:test';
import assert from 'assert';
import startCase from 'lodash-es-with-subpaths/startCase';

describe('startCase', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof startCase, function);
    });
});