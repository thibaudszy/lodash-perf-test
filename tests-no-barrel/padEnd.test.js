import { describe, it } from 'node:test';
import assert from 'assert';
import padEnd from 'lodash-es-with-subpaths/padEnd';

describe('padEnd', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof padEnd, 'function');
    });
});