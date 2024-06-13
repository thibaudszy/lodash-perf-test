import { describe, it } from 'node:test';
import assert from 'assert';
import rest from 'lodash-es-with-subpaths/rest';

describe('rest', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof rest, 'function');
    });
});