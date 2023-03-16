export default function PreloadImage({ src }: { src: string }): JSX.Element {
  return <link rel="preload" href={src} as="image" />;
}
