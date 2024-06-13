import { describe, it } from 'node:test';
import assert from 'assert';
import maxBy from 'lodash-es-with-subpaths/maxBy';

describe('maxBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof maxBy, function);
    });
});