import { describe, it } from 'node:test';
import assert from 'assert';
import { concat } from 'lodash-es';

describe('concat', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof concat, 'function');
    });
});