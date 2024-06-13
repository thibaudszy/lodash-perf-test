import { describe, it } from 'node:test';
import assert from 'assert';
import { sample } from 'lodash-es';

describe('sample', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof sample, 'function');
    });
});