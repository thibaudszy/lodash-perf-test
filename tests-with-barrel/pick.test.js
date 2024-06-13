import { describe, it } from 'node:test';
import assert from 'assert';
import { pick } from 'lodash-es';

describe('pick', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof pick, function);
    });
});