import { describe, it } from 'node:test';
import assert from 'assert';
import throttle from 'lodash-es-with-subpaths/throttle';

describe('throttle', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof throttle, function);
    });
});