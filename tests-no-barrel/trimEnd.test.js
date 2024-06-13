import { describe, it } from 'node:test';
import assert from 'assert';
import trimEnd from 'lodash-es-with-subpaths/trimEnd';

describe('trimEnd', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof trimEnd, 'function');
    });
});