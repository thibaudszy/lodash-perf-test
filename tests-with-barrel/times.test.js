import { describe, it } from 'node:test';
import assert from 'assert';
import { times } from 'lodash-es';

describe('times', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof times, 'function');
    });
});