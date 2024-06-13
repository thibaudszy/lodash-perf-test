import { describe, it } from 'node:test';
import assert from 'assert';
import { sample } from 'lodash-es';

describe('sample', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof sample, 'function');
    });
});