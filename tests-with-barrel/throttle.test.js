import { describe, it } from 'node:test';
import assert from 'assert';
import { throttle } from 'lodash-es';

describe('throttle', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof throttle, 'function');
    });
});