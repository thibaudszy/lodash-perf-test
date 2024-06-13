import { describe, it } from 'node:test';
import assert from 'assert';
import trimStart from 'lodash-es-with-subpaths/trimStart';

describe('trimStart', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof trimStart, 'function');
    });
});