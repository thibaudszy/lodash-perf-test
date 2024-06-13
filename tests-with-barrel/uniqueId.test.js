import { describe, it } from 'node:test';
import assert from 'assert';
import { uniqueId } from 'lodash-es';

describe('uniqueId', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof uniqueId, 'function');
    });
});