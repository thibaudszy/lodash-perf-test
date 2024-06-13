import { describe, it } from 'node:test';
import assert from 'assert';
import { isEmpty } from 'lodash-es';

describe('isEmpty', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isEmpty, 'function');
    });
});