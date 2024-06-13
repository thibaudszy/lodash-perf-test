import { describe, it } from 'node:test';
import assert from 'assert';
import { toInteger } from 'lodash-es';

describe('toInteger', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof toInteger, 'function');
    });
});