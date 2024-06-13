import { describe, it } from 'node:test';
import assert from 'assert';
import { zip } from 'lodash-es';

describe('zip', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof zip, 'function');
    });
});