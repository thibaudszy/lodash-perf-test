import { describe, it } from 'node:test';
import assert from 'assert';
import { first } from 'lodash-es';

describe('first', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof first, function);
    });
});