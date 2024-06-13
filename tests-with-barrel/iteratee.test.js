import { describe, it } from 'node:test';
import assert from 'assert';
import { iteratee } from 'lodash-es';

describe('iteratee', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof iteratee, 'function');
    });
});