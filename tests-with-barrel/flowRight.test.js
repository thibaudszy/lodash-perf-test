import { describe, it } from 'node:test';
import assert from 'assert';
import { flowRight } from 'lodash-es';

describe('flowRight', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof flowRight, 'function');
    });
});