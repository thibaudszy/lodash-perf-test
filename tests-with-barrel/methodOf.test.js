import { describe, it } from 'node:test';
import assert from 'assert';
import { methodOf } from 'lodash-es';

describe('methodOf', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof methodOf, 'function');
    });
});