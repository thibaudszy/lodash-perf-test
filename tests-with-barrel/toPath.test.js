import { describe, it } from 'node:test';
import assert from 'assert';
import { toPath } from 'lodash-es';

describe('toPath', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof toPath, function);
    });
});