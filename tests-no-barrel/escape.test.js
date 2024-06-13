import { describe, it } from 'node:test';
import assert from 'assert';
import escape from 'lodash-es-with-subpaths/escape';

describe('escape', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof escape, function);
    });
});