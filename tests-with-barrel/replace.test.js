import { describe, it } from 'node:test';
import assert from 'assert';
import { replace } from 'lodash-es';

describe('replace', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof replace, 'function');
    });
});