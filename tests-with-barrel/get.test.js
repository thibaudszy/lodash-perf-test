import { describe, it } from 'node:test';
import assert from 'assert';
import { get } from 'lodash-es';

describe('get', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof get, 'function');
    });
});