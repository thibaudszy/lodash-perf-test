import { describe, it } from 'node:test';
import assert from 'assert';
import { toPath } from 'lodash-es';

describe('toPath', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof toPath, 'function');
    });
});