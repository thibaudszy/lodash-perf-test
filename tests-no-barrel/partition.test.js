import { describe, it } from 'node:test';
import assert from 'assert';
import partition from 'lodash-es-with-subpaths/partition';

describe('partition', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof partition, 'function');
    });
});