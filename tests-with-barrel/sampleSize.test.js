import { describe, it } from 'node:test';
import assert from 'assert';
import { sampleSize } from 'lodash-es';

describe('sampleSize', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof sampleSize, 'function');
    });
});