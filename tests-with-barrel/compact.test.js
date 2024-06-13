import { describe, it } from 'node:test';
import assert from 'assert';
import { compact } from 'lodash-es';

describe('compact', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof compact, 'function');
    });
});