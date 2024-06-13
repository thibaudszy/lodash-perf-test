import { describe, it } from 'node:test';
import assert from 'assert';
import { functions } from 'lodash-es';

describe('functions', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof functions, 'function');
    });
});