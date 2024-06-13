import { describe, it } from 'node:test';
import assert from 'assert';
import min from 'lodash-es-with-subpaths/min';

describe('min', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof min, 'function');
    });
});