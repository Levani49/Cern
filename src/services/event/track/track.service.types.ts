import { BufferGeometry, Line, LineBasicMaterial } from 'three';

export interface TrackInfo {
  polylineX: number[];
  polylineY: number[];
  polylineZ: number[];
  phi: number[];
  cotTheta: number[];
  theta: number[];
  eta: number[];
  numPolyline: number[];
  count: number | null;
  SGK: string;
  pt: number[];
}

export interface ExtendedLine extends Line<BufferGeometry, LineBasicMaterial> {
  index: number;
}
