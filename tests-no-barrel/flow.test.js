import { describe, it } from 'node:test';
import assert from 'assert';
import flow from 'lodash-es-with-subpaths/flow';

describe('flow', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof flow, function);
    });
});