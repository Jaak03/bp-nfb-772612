import {pullCommits} from '../../../src';
import {describe, expect, it} from '@jest/globals';

describe('pullCommits', () => {
  it('should return an object', async () => {
    const response = await pullCommits({test: 'data'}, {env: 'test'});
    expect(typeof response).toBe('object');
  });
});
