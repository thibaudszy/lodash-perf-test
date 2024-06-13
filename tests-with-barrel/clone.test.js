import { describe, it } from 'node:test';
import assert from 'assert';
import { clone } from 'lodash-es';

describe('clone', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof clone, 'function');
    });
});