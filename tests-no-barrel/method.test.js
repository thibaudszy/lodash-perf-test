import { describe, it } from 'node:test';
import assert from 'assert';
import method from 'lodash-es-with-subpaths/method';

describe('method', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof method, 'function');
    });
});