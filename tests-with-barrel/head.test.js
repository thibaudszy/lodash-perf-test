import { describe, it } from 'node:test';
import assert from 'assert';
import { head } from 'lodash-es';

describe('head', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof head, function);
    });
});