import { describe, it } from 'node:test';
import assert from 'assert';
import { bindAll } from 'lodash-es';

describe('bindAll', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof bindAll, 'function');
    });
});