import { describe, it } from 'node:test';
import assert from 'assert';
import nth from 'lodash-es-with-subpaths/nth';

describe('nth', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof nth, 'function');
    });
});