import { describe, it } from 'node:test';
import assert from 'assert';
import { delay } from 'lodash-es';

describe('delay', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof delay, function);
    });
});