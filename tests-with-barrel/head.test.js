import { describe, it } from 'node:test';
import assert from 'assert';
import { head } from 'lodash-es';

describe('head', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof head, 'function');
    });
});