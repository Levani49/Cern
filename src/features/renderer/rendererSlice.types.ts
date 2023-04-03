export interface RendererInfo {
  show: boolean;
  renderer: {
    triangles: number;
    fps: number;
    memory: number;
  };
}

export type RendererType = RendererInfo['renderer'];
