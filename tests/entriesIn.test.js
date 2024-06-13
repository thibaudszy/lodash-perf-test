import { describe, it } from 'node:test';
import assert from 'assert';
import { entriesIn } from 'lodash-es';

describe('entriesIn', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof entriesIn, 'function');
    });
});