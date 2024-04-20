import { Vector3 } from '@babylonjs/core';

export const roundVector = (vec: Vector3): Vector3 => {
  return new Vector3(Math.round(vec.x), Math.round(vec.y), Math.round(vec.z));
};
