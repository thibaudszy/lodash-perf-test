import { describe, it } from 'node:test';
import assert from 'assert';
import { curry } from 'lodash-es';

describe('curry', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof curry, function);
    });
});