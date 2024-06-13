import { describe, it } from 'node:test';
import assert from 'assert';
import { split } from 'lodash-es';

describe('split', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof split, 'function');
    });
});