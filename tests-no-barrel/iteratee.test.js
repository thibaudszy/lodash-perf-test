import { describe, it } from 'node:test';
import assert from 'assert';
import iteratee from 'lodash-es-with-subpaths/iteratee';

describe('iteratee', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof iteratee, function);
    });
});