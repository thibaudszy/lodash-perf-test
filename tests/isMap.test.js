import { describe, it } from 'node:test';
import assert from 'assert';
import { isMap } from 'lodash-es';

describe('isMap', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isMap, 'function');
    });
});