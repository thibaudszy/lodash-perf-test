import { describe, it } from 'node:test';
import assert from 'assert';
import delay from 'lodash-es-with-subpaths/delay';

describe('delay', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof delay, 'function');
    });
});