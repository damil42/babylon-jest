import { Vector3 } from '@babylonjs/core';
import { roundVector } from './utils';

describe('utils', () => {
  test('roundVector', () => {
    expect(roundVector(new Vector3(0.4, 1.5, 2.6)).toString()).toBe(
      '{ X: 0 Y: 2 Z: 3 }'
    );
  });
});
