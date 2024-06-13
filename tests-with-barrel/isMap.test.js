import { describe, it } from 'node:test';
import assert from 'assert';
import { isMap } from 'lodash-es';

describe('isMap', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isMap, 'function');
    });
});