import { describe, it } from 'node:test';
import assert from 'assert';
import { zipObject } from 'lodash-es';

describe('zipObject', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof zipObject, 'function');
    });
});