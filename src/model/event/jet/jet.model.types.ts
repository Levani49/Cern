import { ConeGeometry, Quaternion } from 'three';

export interface JetInfo {
  pX: number[];
  pY: number[];
  pZ: number[];
  phi: number[];
  theta: number[];
  eta: number[];
  count: null | number;
  SGK: string;
  et: number[];
}

export interface JetCone {
  quaternion: Quaternion;
  geo: ConeGeometry;
}
