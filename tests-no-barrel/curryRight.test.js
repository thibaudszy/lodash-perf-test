import { describe, it } from 'node:test';
import assert from 'assert';
import curryRight from 'lodash-es-with-subpaths/curryRight';

describe('curryRight', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof curryRight, 'function');
    });
});