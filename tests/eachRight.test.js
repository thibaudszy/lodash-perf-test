import { describe, it } from 'node:test';
import assert from 'assert';
import { eachRight } from 'lodash-es';

describe('eachRight', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof eachRight, 'function');
    });
});