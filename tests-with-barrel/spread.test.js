import { describe, it } from 'node:test';
import assert from 'assert';
import { spread } from 'lodash-es';

describe('spread', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof spread, 'function');
    });
});