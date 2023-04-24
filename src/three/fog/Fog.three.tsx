/**
 * Returns a JSX element that adds black fog to a scene.
 *
 * @returns {JSX.Element} A JSX element that adds black fog to a scene.
 */
export default function Fog(): JSX.Element {
  return <fog color="black" attach="fog" />;
}
