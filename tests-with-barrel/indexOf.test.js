import { describe, it } from 'node:test';
import assert from 'assert';
import { indexOf } from 'lodash-es';

describe('indexOf', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof indexOf, 'function');
    });
});