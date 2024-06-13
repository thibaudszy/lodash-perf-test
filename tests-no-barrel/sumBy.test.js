import { describe, it } from 'node:test';
import assert from 'assert';
import sumBy from 'lodash-es-with-subpaths/sumBy';

describe('sumBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof sumBy, function);
    });
});