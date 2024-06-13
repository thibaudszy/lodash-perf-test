import { describe, it } from 'node:test';
import assert from 'assert';
import debounce from 'lodash-es-with-subpaths/debounce';

describe('debounce', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof debounce, 'function');
    });
});