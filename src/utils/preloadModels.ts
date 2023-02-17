import { useGLTF } from "@react-three/drei";

const modelsUrl = import.meta.env.VITE_MODELS_PROVIDER;

const models = [
  "pixel",
  "sct-bar",
  "sct-sidea",
  "sct-sidec",
  "trt-bar",
  "trt-sidec",
  "trt-sidea",
  "lar-emec-sidea",
  "lar-emec-sidec",
  "lar-hec-sidea",
  "lar-hec-sidec",
  "lar-fcal-sidea",
  "lar-fcal-sidec",
  "lar-barrel",
  "tile-barrel",
  "tile-end-cap-sidea",
  "tile-end-cap-sidec",
  "flex-chain-sec9",
  "flex-chain-sec11",
  "flex-chain-sec15",
  "serv-muon-sw",
  "serv-muon-cable-trays",
  "serv-muon-cable-trays-inside-barrel",
  "serv-muon-barrel-calo-ele-boxes",
  "serv-z0-sec1",
  "serv-z0-sec3",
  "serv-z0-sec5",
  "serv-z0-sec7",
  "barrel-toroid",
  "end-cap-toroid-sidea",
  "end-cap-toroid-sidec",
  "tower-turret-sidea",
  "tower-turret-sidec",
];

/**
 *
 * @param modelName
 */
const preloadModel = (modelName: string): void => {
  const pathToModel = `${modelsUrl}${modelName}`;
  useGLTF.preload(`${pathToModel}.glb`);
  useGLTF.preload(`${pathToModel}-cut1.glb`);
  useGLTF.preload(`${pathToModel}-cut2.glb`);
  useGLTF.preload(`${pathToModel}-cut3.glb`);
  useGLTF.preload(`${pathToModel}-cut4.glb`);
};

// Define a function to preload multiple models in chunks
/**
 *
 * @param models
 * @param chunkSize
 */
function preloadModels(models: string[], chunkSize = 3): void {
  if (!window.requestIdleCallback) return;

  let i = 0;

  /**
   *
   * @param chunk
   */
  const loadChunk = (chunk: string[]): void => {
    for (let j = 0; j < chunk.length; j++) {
      preloadModel(chunk[j]);
    }
  };

  while (i < models.length) {
    const chunk = models.slice(i, i + chunkSize);
    window.requestIdleCallback(() => loadChunk(chunk));
    i += chunkSize;
  }
}

/**
 *
 */
export default function preLoadAllModel(): void {
  preloadModels(models, 3);
}

export { modelsUrl };

// useGLTF.preload(`${modelsUrl}/pixel-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/sct-bar-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/sct-sidea-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/sct-sidec-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/trt-bar-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/trt-sidec-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/trt-sidea-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/pixel-pp1-side-a-cut1.glb`);
// useGLTF.preload(`${modelsUrl}/lar-emec-sidea-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/lar-emec-sidec-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/lar-hec-sidea-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/lar-hec-sidec-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/lar-fcal-sidea-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/lar-fcal-sidec-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/lar-barrel-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/tile-barrel-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/tile-end-cap-sidea-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/tile-end-cap-sidec-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/flex-chain-sec9-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/flex-chain-sec11-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/flex-chain-sec15-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/serv-muon-sw-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/serv-muon-cable-trays-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/serv-muon-cable-trays-inside-barrel-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/serv-muon-barrel-calo-ele-boxes-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/serv-z0-sec1-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/serv-z0-sec3-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/serv-z0-sec5-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/serv-z0-sec7-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/barrel-toroid-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/end-cap-toroid-sidea-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/tower-turret-sidea-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/tower-turret-sidec-cut3.glb`);
// useGLTF.preload(`${modelsUrl}/end-cap-toroid-sidec-cut3.glb`);
