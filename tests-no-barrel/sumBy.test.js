import { describe, it } from 'node:test';
import assert from 'assert';
import sumBy from 'lodash-es-with-subpaths/sumBy';

describe('sumBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof sumBy, 'function');
    });
});