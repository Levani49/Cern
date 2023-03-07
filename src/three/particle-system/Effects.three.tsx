import { Bloom, EffectComposer } from "@react-three/postprocessing";

/**
 *
 */
export default function Effects(): JSX.Element {
  return (
    <EffectComposer>
      <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
    </EffectComposer>
  );
}
