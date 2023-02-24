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
 * @param {modelName} modelName - The name of the model to be preloaded.
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
 * Preload multiple 3D models in chunks to improve performance.
 *
 * @param {string[]} models - The array of model names to be preloaded.
 * @param {number} [chunkSize=3] - The size of each chunk to be preloaded (default value is 3).
 * @returns {Promise<void>} Promise<void>.
 */
async function preloadModels(models: string[], chunkSize = 3): Promise<void> {
  if (!window.requestIdleCallback) return;

  let i = 0;

  /**
   *
   * @param {chunk} chunk The chunk of models to be preloaded.
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
 * Preloads all models
 */
export default function preLoadAllModel(): void {
  preloadModels(models, 3);
}

export { modelsUrl };
