import { describe, it } from 'node:test';
import assert from 'assert';
import rest from 'lodash-es-with-subpaths/rest';

describe('rest', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof rest, function);
    });
});