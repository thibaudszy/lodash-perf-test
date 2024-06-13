import { describe, it } from 'node:test';
import assert from 'assert';
import escapeRegExp from 'lodash-es-with-subpaths/escapeRegExp';

describe('escapeRegExp', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof escapeRegExp, 'function');
    });
});