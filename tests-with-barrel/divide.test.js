import { describe, it } from 'node:test';
import assert from 'assert';
import { divide } from 'lodash-es';

describe('divide', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof divide, 'function');
    });
});