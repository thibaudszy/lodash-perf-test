import { describe, it } from 'node:test';
import assert from 'assert';
import { bindKey } from 'lodash-es';

describe('bindKey', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof bindKey, function);
    });
});