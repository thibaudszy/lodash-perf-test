import { describe, it } from 'node:test';
import assert from 'assert';
import { toPlainObject } from 'lodash-es';

describe('toPlainObject', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof toPlainObject, 'function');
    });
});