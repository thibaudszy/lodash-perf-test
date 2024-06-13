import { describe, it } from 'node:test';
import assert from 'assert';
import { set } from 'lodash-es';

describe('set', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof set, 'function');
    });
});