import { describe, it } from 'node:test';
import assert from 'assert';
import { bindKey } from 'lodash-es';

describe('bindKey', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof bindKey, 'function');
    });
});