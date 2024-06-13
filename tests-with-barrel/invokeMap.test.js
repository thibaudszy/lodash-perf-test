import { describe, it } from 'node:test';
import assert from 'assert';
import { invokeMap } from 'lodash-es';

describe('invokeMap', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof invokeMap, function);
    });
});