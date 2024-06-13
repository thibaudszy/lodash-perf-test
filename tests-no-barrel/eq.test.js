import { describe, it } from 'node:test';
import assert from 'assert';
import eq from 'lodash-es-with-subpaths/eq';

describe('eq', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof eq, function);
    });
});