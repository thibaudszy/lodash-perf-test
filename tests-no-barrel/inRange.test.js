import { describe, it } from 'node:test';
import assert from 'assert';
import inRange from 'lodash-es-with-subpaths/inRange';

describe('inRange', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof inRange, 'function');
    });
});