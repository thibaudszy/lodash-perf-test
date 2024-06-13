import { describe, it } from 'node:test';
import assert from 'assert';
import { extendWith } from 'lodash-es';

describe('extendWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof extendWith, 'function');
    });
});