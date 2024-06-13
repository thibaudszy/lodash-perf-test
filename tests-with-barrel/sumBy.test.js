import { describe, it } from 'node:test';
import assert from 'assert';
import { sumBy } from 'lodash-es';

describe('sumBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof sumBy, 'function');
    });
});