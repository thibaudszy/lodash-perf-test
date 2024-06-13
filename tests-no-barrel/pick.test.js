import { describe, it } from 'node:test';
import assert from 'assert';
import pick from 'lodash-es-with-subpaths/pick';

describe('pick', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof pick, 'function');
    });
});