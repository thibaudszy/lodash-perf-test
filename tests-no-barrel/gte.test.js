import { describe, it } from 'node:test';
import assert from 'assert';
import gte from 'lodash-es-with-subpaths/gte';

describe('gte', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof gte, 'function');
    });
});