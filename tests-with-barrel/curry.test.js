import { describe, it } from 'node:test';
import assert from 'assert';
import { curry } from 'lodash-es';

describe('curry', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof curry, 'function');
    });
});