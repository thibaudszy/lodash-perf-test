import { describe, it } from 'node:test';
import assert from 'assert';
import { pullAll } from 'lodash-es';

describe('pullAll', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof pullAll, 'function');
    });
});