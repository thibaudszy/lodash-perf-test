import { describe, it } from 'node:test';
import assert from 'assert';
import { replace } from 'lodash-es';

describe('replace', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof replace, 'function');
    });
});