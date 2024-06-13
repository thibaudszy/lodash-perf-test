import { describe, it } from 'node:test';
import assert from 'assert';
import { last } from 'lodash-es';

describe('last', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof last, 'function');
    });
});