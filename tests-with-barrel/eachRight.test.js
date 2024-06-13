import { describe, it } from 'node:test';
import assert from 'assert';
import { eachRight } from 'lodash-es';

describe('eachRight', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof eachRight, 'function');
    });
});