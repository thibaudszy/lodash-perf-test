import { describe, it } from 'node:test';
import assert from 'assert';
import { unzip } from 'lodash-es';

describe('unzip', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof unzip, function);
    });
});