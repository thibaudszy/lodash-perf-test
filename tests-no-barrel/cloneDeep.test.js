import { describe, it } from 'node:test';
import assert from 'assert';
import cloneDeep from 'lodash-es-with-subpaths/cloneDeep';

describe('cloneDeep', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof cloneDeep, 'function');
    });
});