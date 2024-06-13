import { describe, it } from 'node:test';
import assert from 'assert';
import escapeRegExp from 'lodash-es-with-subpaths/escapeRegExp';

describe('escapeRegExp', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof escapeRegExp, function);
    });
});